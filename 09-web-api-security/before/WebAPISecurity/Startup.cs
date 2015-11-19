using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebAPISecurity
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // TODO: Configure the OAuth authorization server middleware
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions
            {
                //AuthorizeEndpointPath = new PathString("https://auth.com/auth"),
                TokenEndpointPath = new PathString("/api/token"),
                AllowInsecureHttp = true, // NOT IN PRODUCTION!!!
                // instead of the above, configure a certificate in IIS
                Provider = new OAuthAuthorizationServerProvider
                {
                    OnValidateClientAuthentication = ctx =>
                    {
                        // validate ctx.ClientId and secret (if applicable)
                        ctx.Validated();
                        return Task.FromResult(0);
                    },
                    OnGrantResourceOwnerCredentials = ctx =>
                    {
                        if (ctx.UserName == ctx.Password)
                        {
                            var claims = new List<Claim>();
                            claims.Add(new Claim(ClaimTypes.Name, ctx.UserName));

                            if (ctx.UserName == "bob")
                            {
                                claims.Add(new Claim(ClaimTypes.Role, "Admin"));
                            }

                            ctx.Validated(new ClaimsIdentity(claims, "Password"));
                        }

                        return Task.FromResult(0);
                    }
                }
            });

            // TODO: Configure the OAuth Bearer token middleware
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


            var httpConfig = new HttpConfiguration();
            httpConfig.MapHttpAttributeRoutes();
            httpConfig.Formatters.Remove(httpConfig.Formatters.XmlFormatter);
            httpConfig.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();
            app.UseWebApi(httpConfig);
        }
    }
}