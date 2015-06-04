using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace RestDemo.Api
{
    public class MoviesController: ApiController
    {
        public IEnumerable<Movie> Get()
        {
            return new[]
            {
                new Movie() {Id = 1, Title = "A movie"},
                new Movie() {Id = 2, Title = "Another movie"},
            };
        }

        //[HttpGet]
        //[Route("api/themovie/{id}")]
        public Movie Get(int id)
        {
            return new Movie(){ Id=id, Title = "Movie " + id};
        }

        public HttpResponseMessage Post(Movie newMovie)
        {
            // Save movie
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }



    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}