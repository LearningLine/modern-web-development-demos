using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (ctx, next)=>
            {
                System.Console.WriteLine(ctx.Request.Path);
                // pre
                await next();
                // post
                System.Console.WriteLine(ctx.Response.StatusCode);
            });

            app.UseMyMiddleware();

            //app.Use<MyMiddleware>();

            //app.Use(async (ctx, next) =>
            //{
            //    //ctx.Response.StatusCode = 200;
            //    await ctx.Response.WriteAsync("<h1>Hello OWIN!</h1>");
            //});
        }
    }

    public static class MyMiddlewareOwinExtensions
    {
        public static void UseMyMiddleware(this IAppBuilder app)
        {
            app.Use<MyMiddleware>();
        }

    }

    public class MyMiddleware
    {
        Func<IDictionary<string, object>, Task> _next;

        public MyMiddleware(Func<IDictionary<string, object>, Task> next)
        {
            _next = next;
        }

        public async Task Invoke(IDictionary<string, object> env)
        {
            var ctx = new OwinContext(env);
            //await _next(env);
            await ctx.Response.WriteAsync("<h1>Hello from MyMiddleware!</h1>");
        }

    }
}