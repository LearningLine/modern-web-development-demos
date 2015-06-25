using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.AspNet.Identity;
using WebApplication1.Identity;

namespace WebApplication1
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void _b_Click(object sender, EventArgs e)
        {
            using (var mgr = Identity.MyUserManager.Create())
            {
                var user = mgr.FindByName(_uid.Text);
                if (user != null)
                {
                    if (mgr.IsLockedOut(user.Id))
                    {
                        // can't login because too many guesses
                        return;
                    }

                    if (mgr.CheckPassword(user, _pwd.Text) == false)
                    {
                        mgr.AccessFailed(user.Id);
                    }
                    else
                    {
                        mgr.ResetAccessFailedCount(user.Id);

                        var ci = mgr.CreateIdentity(user, "cookie");

                        //var claims = new Claim[]{
                        //    new Claim("id", "123"),
                        //    new Claim("name", "Brock Allen"),
                        //    new Claim("email", "brock@foo.com"),
                        //    new Claim("role", "Admin"),
                        //    new Claim("role", "Developer"),
                        //};
                        //var ci = new ClaimsIdentity(claims, "cookie");

                        Request.GetOwinContext().Authentication.SignIn(ci);

                        if (String.IsNullOrWhiteSpace(Request.QueryString["ReturnUrl"]))
                        {
                            Response.Redirect("~/");
                        }
                        else
                        {
                            Response.Redirect(Request.QueryString["ReturnUrl"]);
                        }
                    }
                }
            }
        }
    }
}