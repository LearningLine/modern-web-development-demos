using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication3.Controllers
{
    public class TestController : ApiController
    {
        public IEnumerable<Person> Get()
        {
            //return "Hello, Web API!";

            return new[] {
                new Person { Name = "Jason" },
                new Person { Name = "Alice" },
                new Person { Name = "Bob" },
            };
        }

        public IHttpActionResult Post(Person newPerson)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
 
            return Ok();
        }
    }

    public class Person
    {
        [Required]
        [StringLength(1)]
        public string Name { get; set; }

        [Required]
        [Range(18, 99)]
        public int Age { get; set; }
    }
}
