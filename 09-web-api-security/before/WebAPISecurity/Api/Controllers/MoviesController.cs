using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Net.Http;
using WebAPISecurity.Api.Model;
using System.Net;
using System.Net.Http.Headers;
using System.IO;

namespace WebAPISecurity.Api
{
    [RoutePrefix("api/movies")]
    public class MoviesController : ApiController
    {
        string BaseUrl
        {
            get
            {
                return new Uri(Request.RequestUri, this.RequestContext.VirtualPathRoot).AbsoluteUri;
            }
        }

        dynamic Summary(MovieModel movie)
        {
            return new
            {
                movie.Title,
                movie.Year,
                movie.Rating,
                movie.Country,
                poster = BaseUrl + "api/movies/" + movie.ID + "/poster",
                details = BaseUrl + "api/movies/" + movie.ID,
            };
        }

        dynamic Details(MovieModel movie)
        {
            var reviews =
                from r in Data.Reviews
                where r.MovieID == movie.ID
                select r;
            var stars =
                from r in reviews
                select r.Stars;

            return new
            {
                movie.ID,
                movie.Title,
                movie.Description,
                movie.Country,
                movie.CountryID,
                movie.Year,
                movie.Rating,
                poster = BaseUrl + "/api/movies/" + movie.ID + "/poster",
                reviews = BaseUrl + "/api/reviews/" + movie.ID,
                numberOfReviews = reviews.Count(),
                stars = stars.Average()
            };
        }

        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Data.Movies.Select(x=>Summary(x)));
        }

        [Route("{id:int}")]
        public IHttpActionResult Get(int id)
        {
            var movie =
                (from m in Data.Movies
                 where m.ID == id
                 select m).SingleOrDefault();

            if (movie == null) return NotFound();

            return Ok(Details(movie));
        }

        [Route("{id:int}")]
        // TODO: require admin role to update movies
        [Authorize(Roles = "Admin")]
        public IHttpActionResult Put(int id, PutMovie data)
        {
            var movie =
                (from m in Data.Movies
                 where m.ID == id
                 select m).SingleOrDefault();

            if (movie == null) return NotFound();
            movie.Title = data.Title;
            movie.Description = data.Description;
            movie.Rating = data.Rating;
            movie.Year = data.Year;
            movie.CountryID = data.CountryID;

            return StatusCode(HttpStatusCode.NoContent);
        }
        
        [Route("{id:int}/poster")]
        public IHttpActionResult GetPoster(int id)
        {
            var movie =
                (from m in Data.Movies
                 where m.ID == id
                 select m).SingleOrDefault();

            if (movie == null || movie.PosterName == null) return NotFound();

            var stream = PosterLoader.LoadJpg(movie.PosterName);
            if (stream == null) return NotFound();

            return new JpgActionResult(stream);
        }
    }

    public class PutMovie
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int? Year { get; set; }
        public string Rating { get; set; }
        public int CountryID { get; set; }
    }
}
