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
            var cp = (ClaimsPrincipal)User;
            //var ci = (ClaimsIdentity)User.Identity;

            var email_claim = cp.Claims.SingleOrDefault(x => x.Type == "email");
            if (email_claim != null)
            {
                var email = email_claim.Value;
            }

            var access_token_claim = cp.Claims.SingleOrDefault(x => x.Type == "access_token");
            if (access_token_claim != null)
            {
                ViewBag.AccessToken = access_token_claim.Value;
            }

            return View();
        }
    }
}