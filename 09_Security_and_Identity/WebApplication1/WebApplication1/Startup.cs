using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;

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
        }
    }
}
