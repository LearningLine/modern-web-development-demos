using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHostDemo
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

            //app.Use<FooMiddleware>();
            var path = AppDomain.CurrentDomain.BaseDirectory;
            path = Path.Combine(path, @"..\..\web");
            var opts = new FileServerOptions
            {
                FileSystem = new PhysicalFileSystem(path),
                EnableDirectoryBrowsing = true,
                EnableDefaultFiles = false
            };
            app.UseFileServer(opts);

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
