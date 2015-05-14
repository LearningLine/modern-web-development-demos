using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using REST.Models;

namespace REST.Api
{
    public class DemoController: ApiController
    {
        private static IBooksRepository _repo = new BooksRepository();

        public IEnumerable<Book > Get()
        {
            return _repo.GetBooks();
        }

        public HttpResponseMessage Get(int id)
        {

            var book =_repo.GetBook(id);

            if (book != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, book);
            }

            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
    }
}