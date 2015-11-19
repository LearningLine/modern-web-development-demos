using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace WebApplication5.Hubs
{
    public class ChatHub : Hub
    {
        public void SendMessage(string msg)
        {
            Clients.Others.receiveMessage(msg);
            //Clients.Caller.receiveMessage(msg);
            //Clients.All.receiveMessage(msg);

            // send to one person
            //Clients.Caller("satoheusaoetuh").receiveMessage(msg);
            //Context.ConnectionId

            // send to a group of clients
            //Clients.Group("groupName").receiveMessage(msg);
        }

        public void JoinRoom(string roomName)
        {
            Groups.Add(Context.ConnectionId, roomName);
        }
    }
}