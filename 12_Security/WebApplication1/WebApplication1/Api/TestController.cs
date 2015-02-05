using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace WebApplication1.Api
{
    [Route("test")]
    public class TestController : ApiController
    {
        public IHttpActionResult Get()
        {
            if (User.Identity.IsAuthenticated == false)
            {
                return Ok(new { message = "You are not logged in" });
            }
            var cp = (ClaimsPrincipal)User;

            var claims =
                from c in cp.Claims
                select new { c.Type, c.Value };
            return Ok(claims.ToArray());
        }

        public IHttpActionResult Post()
        {
            if (User.Identity.IsAuthenticated == false)
            {
                return Ok(new { message = "You are not logged in" });
            }
            var cp = (ClaimsPrincipal)User;

            var claims =
                from c in cp.Claims
                select new { c.Type, c.Value };
            return Ok(claims.ToArray());
        }
    }
}