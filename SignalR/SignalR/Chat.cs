using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR
{
    public class Chat : Hub
    {
        public void SendChatMessage(string message)
        {
            this.Clients.All.GotMessage(DateTime.Now + " " +  message);

            //this.Clients.Group("coding").ChangedRooms();
            //this.Clients.Client()

            //this.Groups.Add(this.Context.ConnectionId, "coding");
        }
    }
}