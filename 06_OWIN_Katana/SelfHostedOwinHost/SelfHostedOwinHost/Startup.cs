﻿using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHostedOwinHost
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (ctx, next) =>
            {
                // pre
                await next();

                // post
                Console.WriteLine("[{0}] {1} {2}",
                    ctx.Response.StatusCode,
                    ctx.Request.Method,
                    ctx.Request.Path);
            });

            app.Use<MyMiddleware>();

            //app.Map("/favicon.ico", icon =>
            //{
            //    icon.Use((ctx, next) =>
            //    {
            //        ctx.Response.StatusCode = 404;
            //        return Task.FromResult(0);
            //    });
            //});

            //app.Use(async (ctx, next) =>
            //{
            //    await ctx.Response.WriteAsync("<h1>Hello OWIN!</h1>");
            //});
        }
    }

    public class MyMiddleware
    {
        private Func<IDictionary<string, object>, Task> _next;
        
        public MyMiddleware(Func<IDictionary<string, object>, Task> next)
        {
            _next = next;
        }

        public async Task Invoke(IDictionary<string, object> env)
        {
            var ctx = new OwinContext(env);

            if (ctx.Request.Path.ToString() == "/favicon.ico")
            {
                await _next(env);
            }
            else
            {
                await ctx.Response.WriteAsync("<h1>MyMiddleware</h1>");
            }
        }
    }

    //public class Temp
    //{
    //    static async Task Work()
    //    {
    //        // #1

    //        await Task.Factory.StartNew(() =>
    //        {
    //            // #2

    //        });

    //        // #3


    //        //// #1
    //        //var task = Task.Factory.StartNew(() =>
    //        //{
    //        //    // work in here is async
    //        //    // #3
    //        //});

    //        ////// #2
    //        //task.ContinueWith(t =>
    //        //{
    //        //    // #4
    //        //});
    //    }
    
    //}
}
