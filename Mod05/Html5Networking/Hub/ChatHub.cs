using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Html5Networking
{
    public class ChatHub: Hub 
    {
        public void SendMessage(string msg)
        {

            this.Clients.All.broadcast(msg);
        }
    }
}