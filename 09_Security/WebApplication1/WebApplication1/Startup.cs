using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using System.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Web.Http;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                 AuthenticationType = "Cookies",
            });

            app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions
            {
                AuthenticationType = "oidc",
                Authority = "https://localhost:44333/core",
                ClientId = "test",
                RedirectUri = "http://localhost:52784/",
                ResponseType = "id_token token",
                Scope = "openid email profile api1",
                SignInAsAuthenticationType = "Cookies",
                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = n =>
                    {
                        var access_token = n.ProtocolMessage.AccessToken;
                        n.AuthenticationTicket.Identity.AddClaim(new System.Security.Claims.Claim("access_token", access_token));
                        return Task.FromResult(0);
                    }
                }
            });

            app.Map("/api", api =>
            {
                api.UseIdentityServerBearerTokenAuthentication(new IdentityServer3.AccessTokenValidation.IdentityServerBearerTokenAuthenticationOptions
                {
                    Authority = "https://localhost:44333/core",
                    RequiredScopes = new string[] { "api1" }
                });

                var config = new HttpConfiguration();
                config.SuppressDefaultHostAuthentication();
                config.Filters.Add(new HostAuthenticationFilter("Bearer"));
                config.Filters.Add(new AuthorizeAttribute());
                config.MapHttpAttributeRoutes();
                api.UseWebApi(config);
            });
        }
    }
}
