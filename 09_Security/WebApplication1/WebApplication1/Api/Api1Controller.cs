using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApplication1.Api
{
    public class Api1Controller : ApiController
    {
        [Route("api1")]
        public IHttpActionResult Get()
        {
            var cp = (ClaimsPrincipal)User;
            var claims = cp.Claims.Select(x => x.Type + ":" + x.Value).ToArray();
            return Ok(new { message = "it worked", claims=claims });
        }
    }
}
