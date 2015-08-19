using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Db
{
    public class NorthwindDbContext : DbContext
    {
        public NorthwindDbContext()
            : base("Northwind")
        {
        }

        public DbSet<Product> Products { get; set; }
    }

    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }
}