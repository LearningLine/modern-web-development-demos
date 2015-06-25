using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using System.Security.Claims;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = "cookie",
                LoginPath = new PathString("/login.aspx")
                //CookiePath = "/foo",
                //CookieSecure = CookieSecureOption.SameAsRequest,
                //ExpireTimeSpan = 
            });

            app.Use(async (ctx, next) =>
            {
                if (ctx.Authentication.User != null &&
                    ctx.Authentication.User.Identity.IsAuthenticated)
                {
                    var id = ctx.Authentication.User.FindFirst("id").Value;
                    if (id == "123")
                    {
                        var claims_to_add = new Claim[]{
                            new Claim("name", "Brock Allen"),
                            new Claim("email", "brock@foo.com"),
                            new Claim("role", "Admin"),
                            new Claim("role", "Developer")
                        };
                        ctx.Authentication.User.Identities.First().AddClaims(claims_to_add);
                    }
                }

                await next();
            });
        }
    }
}
