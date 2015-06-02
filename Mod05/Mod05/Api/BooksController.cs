using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Mod05.Models;

namespace Mod05.Api
{
    public class BooksController : ApiController
    {
        private IBooksRepository _repo = new BooksRepository();

        // GET api/books
        public IQueryable<Book> Get()
        {
            return _repo.GetBooks().AsQueryable();
        }

        // GET api/books/5
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response;

            var book = _repo.GetBook(id);
            if (book == null)
            {
                response = Request.CreateResponse(HttpStatusCode.NotFound);
            }

            response = Request.CreateResponse(HttpStatusCode.OK, book);

            response.Headers.Add("Access-Control-Allow-Origin", "*");

            return response;
        }

    }
}
