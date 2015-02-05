using Microsoft.Owin.Security.Cookies;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = "Cookie",
            });

            app.Map("/api", api =>
            {
                var config = new HttpConfiguration();
                config.SuppressDefaultHostAuthentication();
                config.MapHttpAttributeRoutes();
                config.Formatters.Remove(config.Formatters.XmlFormatter);
                config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();
                api.UseWebApi(config);
            });
        }
    }
}