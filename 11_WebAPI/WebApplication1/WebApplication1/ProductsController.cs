using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace WebApplication1
{
    [Route("products")]
    public class ProductsController : ApiController
    {
        static List<Product> products = new List<Product>()
        {
            new Product{Name = "Chai", Price = 10M},
            new Product{Name = "Beer", Price = 20M},
            new Product{Name = "Coffee", Price = 30M},
        };

        //[HttpGet]
        public IHttpActionResult Get(string filter = null)
        {
            return Ok(products);
        }

        [Route("products/{id:int}", Name="get")]
        public IHttpActionResult Get(int id)
        {
            if (id >= products.Count)
            {
                return NotFound();
            }

            var p = products[id];
            return Ok(p);
        }
        
        [Route("products/{id:int}")]
        public IHttpActionResult Put(int id, Product model)
        {
            if (id >= products.Count)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                var errors =
                    from item in ModelState
                    where item.Value.Errors.Any()
                    from e in item.Value.Errors
                    select e.ErrorMessage;
                var data = new {
                    errors = errors.ToArray()
                };
                return ResponseMessage(Request.CreateResponse(HttpStatusCode.BadRequest, data));
            }

            var p = products[id];
            p.Name = model.Name;
            p.Price = model.Price;

            return StatusCode(HttpStatusCode.NoContent);
        }


        //[Route("products/{id:int}")]
        //public IHttpActionResult Patch(int id, Delta<Product> delta)
        //{
        //    if (id >= products.Count)
        //    {
        //        return NotFound();
        //    }

        //    if (!ModelState.IsValid)
        //    {
        //        var errors =
        //            from item in ModelState
        //            where item.Value.Errors.Any()
        //            from e in item.Value.Errors
        //            select e.ErrorMessage;
        //        var data = new
        //        {
        //            errors = errors.ToArray()
        //        };
        //        return ResponseMessage(Request.CreateResponse(HttpStatusCode.BadRequest, data));
        //    }

        //    var p = products[id];
        //    p.Name = model.Name;
        //    p.Price = model.Price;

        //    return StatusCode(HttpStatusCode.NoContent);
        //}


        [Route("products")]
        public IHttpActionResult Post(Product model)
        {
            if (!ModelState.IsValid)
            {
                var errors =
                    from item in ModelState
                    where item.Value.Errors.Any()
                    from e in item.Value.Errors
                    select e.ErrorMessage;
                var data = new
                {
                    errors = errors.ToArray()
                };
                return ResponseMessage(Request.CreateResponse(HttpStatusCode.BadRequest, data));
            }

            products.Add(model);

            var resp = Request.CreateResponse(HttpStatusCode.Created);
            resp.Headers.Location = new Uri(Url.Link("get", new { id=products.Count-1 }));
            return ResponseMessage(resp);
        }


    }


}