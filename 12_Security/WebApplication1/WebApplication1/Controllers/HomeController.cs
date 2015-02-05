using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            //User.IsInRole("Admin")
            return View();
        }

        public ActionResult Login()
        {
            var username = "brock";

            var claims = new Claim[]{
                new Claim("username", username),
                new Claim("name", "Brock Allen"),
                new Claim("email", "brockallen@gmail.com"),
                new Claim("role", "Admin"),
                new Claim("role", "Developer"),
                new Claim("status", "gold"),
                new Claim("age", "5"),
            };
            var ci = new ClaimsIdentity(
                claims, "Cookie", "name", "role");

            var ctx = Request.GetOwinContext();
            ctx.Authentication.SignIn(ci);

            return Redirect("~/Home/Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Action()
        {
            return View();
        }
        
        public ActionResult Logout()
        {
            var ctx = Request.GetOwinContext();
            ctx.Authentication.SignOut("Cookie");

            return Redirect("~/Home/Index");
        }
    }
}