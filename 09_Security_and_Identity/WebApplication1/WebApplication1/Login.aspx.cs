using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void _b_Click(object sender, EventArgs e)
        {
            if (_uid.Text == "brock" && 
                _pwd.Text == "pass")
            {
                var claims = new Claim[]{
                    new Claim("name", "Brock Allen"),
                    new Claim("id", "123"),
                    new Claim("email", "brock@foo.com"),
                    new Claim("role", "Admin"),
                    new Claim("role", "Developer"),
                };
                var ci = new ClaimsIdentity(claims, "cookie");

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