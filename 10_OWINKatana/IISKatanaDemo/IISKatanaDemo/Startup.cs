using IISKatanaDemo;
using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//[assembly: OwinStartup(typeof(Startup))]

namespace IISKatanaDemo
{
    public class FooMiddleware
    {
        Func<IDictionary<string, object>, Task> next;
        public FooMiddleware(Func<IDictionary<string, object>, Task> next)
        {
            this.next = next;
        }

        public async Task Invoke(IDictionary<string, object> env)
        {
            var ctx = new OwinContext(env);
            if (ctx.Request.Path.Value.EndsWith("foo"))
            {
                //ctx.Response.StatusCode = 401;
                await ctx.Response.WriteAsync("<h1>Hello Foo!</h1>");
            }
            else
            {
                await next(env);
            }
        }
    }

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (ctx, next) =>
            {
                // pre
                Console.WriteLine(ctx.Request.Uri.AbsoluteUri);

                await next();

                // post
                Console.WriteLine(ctx.Response.StatusCode);

            });

            app.Use<FooMiddleware>();

            //app.Use(async (ctx, next) =>
            //{
            //    if (ctx.Request.Path.Value.EndsWith("foo"))
            //    {
            //        ctx.Response.StatusCode = 401;
            //        await ctx.Response.WriteAsync("<h1>Hello Foo!</h1>");
            //    }
            //    else
            //    {
            //        await next();
            //    }
            //});
        }
    }
}
