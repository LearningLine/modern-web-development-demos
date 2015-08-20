using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using System.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            app.Map("/api", api =>
            {
                api.UseIdentityServerBearerTokenAuthentication(new IdentityServer3.AccessTokenValidation.IdentityServerBearerTokenAuthenticationOptions
                {
                    Authority = "https://localhost:44333/core",
                    RequiredScopes = new string[] { "api1" }
                });

                var config = new HttpConfiguration();
                config.EnableCors();
                //config.EnableCors(new EnableCorsAttribute("http://a", "*", "*"));
                config.Filters.Add(new AuthorizeAttribute());
                config.MapHttpAttributeRoutes();
                api.UseWebApi(config);
            });
        }
    }
}
