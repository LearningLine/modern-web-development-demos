using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();

            Task.Factory.StartNew(async () =>
            {
                while(true)
                {
                    await Task.Delay(2000);

                    GlobalHost.ConnectionManager.GetHubContext<Chat>().Clients.All.GotMessage("spam from server at " + DateTime.Now);
                }

            });
        }
    }
}
