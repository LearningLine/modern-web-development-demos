using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SRTry2
{
    public class Chat : Hub
    {
        public override System.Threading.Tasks.Task OnConnected()
        {
            //this.Context.User
            //this.Context.ConnectionId
 //           this.Groups.Add(this.Context.ConnectionId, "Admins");
            return base.OnConnected();
        }

        public void SendMessage(string message)
        {
            //this.Clients.Group("Admins").GotMessage(...)
            this.Clients.All.GotMessage(message);
        }
    }
}