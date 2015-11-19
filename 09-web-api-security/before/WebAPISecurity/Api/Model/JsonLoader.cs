using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPISecurity.Api
{
    class JsonLoader
    {
        public static string LoadJson(string file)
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, Path.Combine("data", file));
            using (var sr = new StreamReader(path))
            {
                var json = sr.ReadToEnd();
                return json;
            }
        }
        public static T Load<T>(string file)
        {
            var json = LoadJson(file);
            if (json == null) return default(T);
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
