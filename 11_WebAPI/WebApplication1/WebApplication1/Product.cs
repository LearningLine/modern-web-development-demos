using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class Product
    {
        [Required]
        public string Name { get; set; }
        [Range(0, 1000, ErrorMessage="Don't send me bad data")]
        public decimal Price { get; set; }
    }
}