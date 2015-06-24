using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    // overposting/underposting
    public class ProductModel
    {
        [Required]
        public string Name { get; set; }
        
        [Range(0, Double.MaxValue, ErrorMessage="Price must be greater than zero.")]
        public decimal? Price { get; set; }
    }
}