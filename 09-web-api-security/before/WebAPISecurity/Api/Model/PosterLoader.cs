using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPISecurity.Api
{
    class PosterLoader
    {
        public static Stream LoadJpg(string file)
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, Path.Combine("data\\posters", file));
            if (!File.Exists(path)) return null;
            return File.OpenRead(path);
        }
    }
}
