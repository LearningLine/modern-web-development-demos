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
    [RoutePrefix("api/countries")]
    public class CountryController : ApiController
    {
        dynamic Summary(CountryModel country)
        {
            return new
            {
                country.ID, country.Name
            };
        }

        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Data.Countries.Select(x=>Summary(x)));
        }

    }
}
