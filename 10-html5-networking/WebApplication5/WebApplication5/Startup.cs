using Microsoft.Owin;
using Owin;

namespace WebApplication5
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}