using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using WebAPISecurity.Api.Model;

namespace WebAPISecurity.Api
{
    [RoutePrefix("api/reviews")]
    public class ReviewsController : ApiController
    {
        string BaseUrl
        {
            get
            {
                return new Uri(Request.RequestUri, this.RequestContext.VirtualPathRoot).AbsoluteUri;
            }
        }

        dynamic Map(ReviewModel review)
        {
            return new
            {
                review.UserID,
                review.MovieID,
                review.ReviewDate,
                review.Comment,
                review.Stars,
                movie = Data.Movies.Where(x=>x.ID==review.MovieID).Select(x=>x.Title).SingleOrDefault(),
                poster = BaseUrl + "api/movies/" + review.MovieID + "/poster",
            };
        }
        
        [Route("")]
        public IHttpActionResult Get(string filter)
        {
            filter = filter.ToLower();
            var reviews =
                from review in Data.Reviews
                let movie = (from m in Data.Movies where m.ID == review.MovieID select m).Single()
                where 
                    (review.Comment != null && review.Comment.ToLower().Contains(filter)) || 
                    (review.UserID != null && review.UserID.Contains(filter)) || 
                    movie.Title.ToLower().Contains(filter)
                select review;

            return Ok(reviews.Select(x => Map(x)));
        }
        
        [Route("{movieID:int}")]
        public IHttpActionResult Get(int movieID)
        {
            var reviews =
                from review in Data.Reviews
                where review.MovieID == movieID
                select review;

            return Ok(reviews.Select(x => Map(x)));
        }
        
        [Route("{movieID:int}/{id:int}")]
        public IHttpActionResult GetReview(int movieID, int id)
        {
            var reviews =
                from review in Data.Reviews
                where review.MovieID == movieID && review.ID == id
                select review;
            
            var r = reviews.SingleOrDefault();
            if (r == null) return NotFound();
            
            return Ok(Map(r));
        }

        [Route("{movieID:int}")]
        // TODO: require authentication to create reviews
        [Authorize]
        public IHttpActionResult Post(int movieID, [FromBody] PostReview data)
        {
            var username = User.Identity.Name;

            // TODO: use username as last param to AddReview
            var r = Data.AddReview(movieID, data.Stars, data.Review, username /* use username here instead of null */);
            return Created(BaseUrl + "/reviews/" + movieID + "/" + r.ID, Map(r));
        }
    }

    public class PostReview
    {
        public int? Stars { get; set; }
        public string Review { get; set; }
    }
}
