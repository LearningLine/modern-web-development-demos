using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApplication1
{
    public class Link
    {
        public string Rel { get; set; }
        public string Href { get; set; }
    }

    public class Product
    {
        [Required]
        public string Name { get; set; }
        [Range(0, 2000)]
        public decimal? Price { get; set; }
        public Dictionary<string, string> Links { get; set; }
    }

    //[RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {
        // GET ~/api/products
        //[Route("")]

        // don't be lazy like me -- call dispose on this thing
        database.NorthwindDb db = new database.NorthwindDb();

        public IHttpActionResult Get()
        {
            var products = db.Products.ToArray();
            var list = products.Select(
                x => new Product
                {
                    Name = x.ProductName,
                    Links = new Dictionary<string, string>
                    {
                        {"details", Url.Link("product_details", new { id=x.ProductId })}
                    }
                    //Links = new List<Link>
                    //{
                    //    new Link {
                    //        Rel ="details",
                    //        Href =Url.Link("product_details", new { id=x.ProductId })
                    //    }
                    //}
                });

            return Ok(list.ToArray());
        }

        [Route("api/products/{id:int}", Name = "product_details")]
        public IHttpActionResult Get(int id)
        {
            var product = db.Products.SingleOrDefault(x => x.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

            var result = new Product
            {
                Name = product.ProductName,
                Price = product.UnitPrice,
                Links = new Dictionary<string, string>
                {
                    {"update", Url.Link("product_update", new { id=id })}
                }
            };

            return Ok(result);
        }

        [Route("api/products/{id:int}", Name = "product_update")]
        public IHttpActionResult Put(int id, Product model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            if (model.Price == 23)
            {
                ModelState.AddModelError("", "Price can't be 23");
            }

            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var product = db.Products.SingleOrDefault(x => x.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

            product.ProductName = model.Name;
            product.UnitPrice = model.Price;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
