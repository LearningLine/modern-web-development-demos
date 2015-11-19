using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication3.Controllers
{
    [RoutePrefix("api/people")]
    public class PeopleController : ApiController
    {
        [Route("")]
        public IHttpActionResult GetPeople()
        {
            return Ok(new[] {
                new Person { Name = "Jason" },
                new Person { Name = "Alice" },
                new Person { Name = "Bob" },
            });
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreatePerson()
        {
            return Ok();
        }

        [Route(":id")]
        public IHttpActionResult GetPerson(int id)
        {
            return Ok(new Person { Name = "Jason" });
        }
    }
}
