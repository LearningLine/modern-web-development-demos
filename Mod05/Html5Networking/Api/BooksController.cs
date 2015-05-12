using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Html5Networking.Models;
using WebGrease.Css.Ast.Selectors;

namespace Html5Networking.Api 
{
    public class BooksController : ApiController
    {
        private readonly IBooksRepository _repo = new BooksRepository();

        // GET api/books
        public async Task<HttpResponseMessage> Get()
        {
            var books = await _repo.GetBooks();

            var response = Request.CreateResponse(HttpStatusCode.OK, books);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        // GET api/books/5
        public async Task<IHttpActionResult> Get(int id)
        {
            var book = await _repo.GetBook(id);
            if (book == null)
            {
                return NotFound();
            }
            
            return Ok(book);
        }

        // POST api/books
        public async Task<IHttpActionResult> Post(Book newBook)
        {
            try
            {
                var book = await _repo.AddBook(newBook);
                var location = new Uri(Url.Link("DefaultApi", new { id = book.Id }));
                return Created(location, book);
            }
            catch (ValidationException ex)
            {
                return new NegotiatedContentResult<string>(HttpStatusCode.NotAcceptable, ex.Message, this);
            }
        }

        // PUT api/books/5
        public async Task<IHttpActionResult> Put(int id, Book newBook)
        {
            try
            {
                if (newBook.Id != id)
                {
                    throw new ValidationException("Invalid book ID.");
                }
                var book = await _repo.UpdateBook(newBook);

                return Ok(book);
            }
            catch (ValidationException ex)
            {
                return new NegotiatedContentResult<string>(HttpStatusCode.NotAcceptable, ex.Message, this);
            }
        }

        // DELETE api/books/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                await _repo.DeleteBook(id);
                return new StatusCodeResult(HttpStatusCode.NoContent, this);
            }
            catch (ValidationException ex)
            {
                return new NegotiatedContentResult<string>(HttpStatusCode.NotAcceptable, ex.Message, this);
            }
        }
    }
}
