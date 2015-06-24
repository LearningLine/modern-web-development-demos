using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebApplication1
{
    public class ProductsController : ApiController
    {
        Db.NorthwindDbContext db = new Db.NorthwindDbContext();

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

        //[HttpGet]
        [Route("products")] // GET ~/products
        public IHttpActionResult Get()
        {
            var query =
                from p in db.Products
                select new Models.ProductModel
                {
                    Name = p.ProductName,
                    Price = p.UnitPrice
                };

            return Ok(query.ToArray());
        }

        [Route("products/{id}")] // GET ~/products/1
        public IHttpActionResult Get(int id)
        {
            var query =
                from p in db.Products
                where p.ProductId == id
                select new Models.ProductModel
                {
                    Name = p.ProductName,
                    Price = p.UnitPrice
                };
            
            var prod = query.FirstOrDefault();
            if (prod == null)
            {
                return StatusCode(System.Net.HttpStatusCode.NotFound);
            }

            return Ok(prod);
        }

        [Route("products/{id}")] // PUT ~/products/1
        public IHttpActionResult Put(int id, Models.ProductModel model)
        {
            var query =
                from p in db.Products
                where p.ProductId == id
                select p;
            
            var dbprod = query.FirstOrDefault();
            if (dbprod == null)
            {
                return StatusCode(System.Net.HttpStatusCode.NotFound);
            }

            // automapper
            dbprod.ProductName = model.Name;
            dbprod.UnitPrice = model.Price;
            db.SaveChanges();

            // 204
            return StatusCode(System.Net.HttpStatusCode.NoContent);
        }

        [Route("products")] // POST ~/products
        public IHttpActionResult Post(Models.ProductModel model)
        {
            if (model.Price == 10M && model.Name.Length < 3)
            {
                ModelState.AddModelError("Price", "Price can't be 10 when the name is less than 2 chars.");
            }

            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var dbprod = new Db.Product
            {
                ProductName = model.Name, UnitPrice = model.Price
            };
            db.Products.Add(dbprod);
            db.SaveChanges();

            // 201
            return StatusCode(System.Net.HttpStatusCode.Created);
        }

        [Route("products/{id}")] // DELETE ~/products/1
        public IHttpActionResult Delete(int id)
        {
            var query =
                from p in db.Products
                where p.ProductId == id
                select p;

            var dbprod = query.FirstOrDefault();
            if (dbprod == null)
            {
                return StatusCode(System.Net.HttpStatusCode.NotFound);
            }

            db.Products.Remove(dbprod);
            db.SaveChanges();

            // 204
            return StatusCode(System.Net.HttpStatusCode.NoContent);
        }

        // GET ~/products/5 => 200, Content-Type:application/json, [{..}, {..}, {..}]
        // PUT ~/products/5 => 406
        // DELETE ~/products/5 => 404
        // GET ~/products
        // POST ~/products

        // REST/HATEOAS -- Roy Fielding/PhD:2000
        // hypermedia/links
    }
}