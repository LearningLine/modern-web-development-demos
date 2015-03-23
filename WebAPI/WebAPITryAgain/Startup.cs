using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAPITryAgain
{
    public class Startup
    {

        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            //HTTP: GET   POST
            // http://localhost/api/roles/3

            //http://localhost

            config.Routes.MapHttpRoute(
                name: "api",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
            
            config.EnableCors();
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();
            config.MapHttpAttributeRoutes();

            app.UseWebApi(config);
        }


    }
}