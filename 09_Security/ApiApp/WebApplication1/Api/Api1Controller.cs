using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Api
{
    [EnableCors("http://localhost:52784", "Accept, Content-Type, Authorization", "*")]
    public class Api1Controller : ApiController
    {
        [Route("api1")]
        //[EnableCors("http://localhost:52784", "Accept, Content-Type, Authorization", "GET")]
        public IHttpActionResult Get()
        {
            var cp = (ClaimsPrincipal)User;
            var claims = cp.Claims.Select(x => x.Type + ":" + x.Value).ToArray();
            return Ok(new { message = "it worked", claims=claims });
        }
    }
}
