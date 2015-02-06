using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ajax.Api
{
    public class ProductsController : ApiController
    {
        //Data.Northwind db = new Data.Northwind();

        public static List<ProductModel> products = new List<ProductModel>{
            new ProductModel{ID = 1, Name = "Chai", Price = 10},
            new ProductModel{ID = 2, Name = "Beer", Price = 20},
            new ProductModel{ID = 3, Name = "Coffee", Price = 15},
        };

        [Route("products")]
        public IHttpActionResult Get()
        {
            return Ok(products.Select(x => new { ID=x.ID, Name = x.Name}));
        }
        
        [Route("products/{id:int}")]
        public IHttpActionResult Get(int id)
        {
            var prod = products.Where(x=>x.ID==id).SingleOrDefault();
            if (prod == null) return NotFound();
            return Ok(prod);
        }
        [Route("products/{id:int}")]
        public IHttpActionResult Put(int id, ProductModel model)
        {
            var prod = products.Where(x => x.ID == id).SingleOrDefault();
            if (prod == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest();

            prod.Name = model.Name;
            prod.Price = model.Price;

            return Ok();
        }
    }

    public class ProductModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
