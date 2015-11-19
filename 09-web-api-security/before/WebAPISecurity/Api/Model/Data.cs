using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace WebAPISecurity.Api.Model
{
    public class ReviewModel
    {
        public int ID { get; set; }
        public int MovieID { get; set; }
        public string UserID { get; set; }
        public int? Stars { get; set; }
        public string Comment { get; set; }
        public DateTime ReviewDate { get; set; }
    }
    
    public class MovieModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int? Year { get; set; }
        public string Rating { get; set; }
        public int? DirectorID { get; set; }
        public int? CountryID { get; set; }
        public string PosterName { get; set; }
        public string Country
        {
            get
            {
                return Data.Countries.Where(x => x.ID == this.CountryID).Select(x => x.Name).SingleOrDefault();
            }
        }
    }

    public class CountryModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }

    public class Data
    {
        static Data()
        {
            movies = JsonLoader.Load<MovieModel[]>("Movies.json");
            reviews = JsonLoader.Load<ReviewModel[]>("Reviews.json").ToList();
            countries = JsonLoader.Load<CountryModel[]>("Countries.json");
        }
        
        static List<ReviewModel> reviews;
        static MovieModel[] movies;
        static CountryModel[] countries;

        public static MovieModel[] Movies
        {
            get
            {
                return movies;
            }
        }

        public static ReviewModel[] Reviews
        {
            get
            {
                return reviews.ToArray();
            }
        }
        public static CountryModel[] Countries
        {
            get
            {
                return countries;
            }
        }

        public static ReviewModel AddReview(int movieID, int? stars, string review, string user)
        {
            ReviewModel r = new ReviewModel
            {
                MovieID = movieID, Stars = stars, Comment = review, ReviewDate = DateTime.Now, UserID = user
            };
            r.ID = Reviews.Max(x => x.ID) + 1;
            reviews.Add(r);
            return r;
        }
    }
}