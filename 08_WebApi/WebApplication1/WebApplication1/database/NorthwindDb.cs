using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1.database
{
    public class NorthwindDb : DbContext
    {
        public NorthwindDb()
            : base("northwind")
        {
        }

        public DbSet<ProductEntity> Products { get; set; }
    }

    [Table("Products")]
    public class ProductEntity
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }
}
