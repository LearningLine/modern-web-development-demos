using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPITryAgain
{
    [RoutePrefix("api")]
    [EnableCors("http://localhost, http://localhost:1234", "*", "PUT, GET")]
    public class RolesController : ApiController
    {
        private static List<Role> _roles;

        public RolesController()
        {
            if (_roles == null)
            {
                _roles = new List<Role>();
                _roles.Add(new Role {
                    Name = "Thief",
                    HitPoints = 6,
                    Id = 1
                });
                _roles.Add(new Role
                {
                    Name = "Fighter",
                    HitPoints = 10,
                    Id = 2
                });
                _roles.Add(new Role
                {
                    Name = "Mage",
                    HitPoints = 4,
                    Id = 3
                });
            }
        }

        // "api/roles/1"
        [Route("role/{id}")]
        //http://localhost/api/role/3

        public IHttpActionResult Get(int id)
        {
            var role = _roles.FirstOrDefault(r => r.Id == id);
            if (role == null)
            {
                return NotFound();
            }
            return Ok(role);
        }

        //[Route("api/role/mostPowerful")]
        //http://localhost/api/role
        public IHttpActionResult Get()
        {
            var role = _roles.FirstOrDefault(r => r.Id == id);
            if (role == null)
            {
                return NotFound();
            }
            return Ok(role);
        }

        public IHttpActionResult Get()
        {
            //var roles = _roles.Select(r => new
            //{
            //   Name= r.Name
            //});
            //return Ok(roles.ToArray());
            return Ok(_roles.ToArray());           
        }

        //HTTP-  DELETE
        //http://localhost/api/role/3
        public IHttpActionResult Delete(int id)
        {
            //_roles.Remove()
            return Ok();
        }

        //HTTP POST
        //http://localhost/api/role/3
        [HttpPost]
        public IHttpActionResult Post(int id, Role role)
        {
            // 
        }




    }
}