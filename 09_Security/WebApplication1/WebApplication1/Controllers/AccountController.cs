using Microsoft.Owin.Security;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult Logout()
        {
            Request.GetOwinContext().Authentication.SignOut("Cookies");
            return Redirect("~/");
        }

        public ActionResult Login()
        {
            var opts = new AuthenticationProperties
            {
                RedirectUri = "/"
            };
            Request.GetOwinContext().Authentication.Challenge(opts, "oidc");
            return new HttpUnauthorizedResult();
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Login(string username)
        //{
        //    var claims = new List<Claim>
        //    {
        //        new Claim("id", "123"),
        //        new Claim("first_name", "Brock"),
        //        new Claim("last_name", "Brock"),
        //        new Claim("email", "BrockAllen@gmail.com"),
        //        new Claim("role", "Admin"),
        //        new Claim("role", "Developer"),
        //    };
        //    var ci = new ClaimsIdentity(claims, "Cookies");

        //    var ctx = Request.GetOwinContext();
        //    ctx.Authentication.SignIn(ci);

        //    return Redirect("~/");
        //}
    }
}