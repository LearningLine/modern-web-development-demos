using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Html5Networking.Startup))]
namespace Html5Networking
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
