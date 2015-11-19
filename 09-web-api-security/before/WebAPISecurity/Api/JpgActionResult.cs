using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace WebAPISecurity.Api
{
    public class JpgActionResult : IHttpActionResult
    {
        Stream jpg;

        public JpgActionResult(Stream jpg)
        {
            if (jpg == null) throw new ArgumentNullException("jpg");

            this.jpg = jpg;
        }

        public Task<HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            var resp = new HttpResponseMessage(HttpStatusCode.OK);
            resp.Content = new StreamContent(this.jpg);
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");
            return Task.FromResult(resp);
        }
    }
}