using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace WebApplication1
{
    public partial class Profile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void _b_Click(object sender, EventArgs e)
        {
            using (var mgr = Identity.MyUserManager.Create())
            {
                var cp = (ClaimsPrincipal)User;
                var id = cp.FindFirst(ClaimTypes.NameIdentifier).Value;

                //var user = mgr.FindById(id);
                //user.Claims.
                
                // PBKDF2 -- salt
                mgr.AddClaim(id, new Claim(ClaimTypes.GivenName, _first.Text));
                mgr.AddClaim(id, new Claim(ClaimTypes.Surname, _last.Text));
                mgr.SetEmail(id, _email.Text);
                
                //var token = mgr.GenerateEmailConfirmationToken(id);
                //mgr.ConfirmEmail(id, token);

                //var reset_token = mgr.GeneratePasswordResetToken(id);
                //mgr.ResetPassword(id, reset_token, "newpass");

                //mgr.SetPhoneNumber();
                //mgr.GenerateChangePhoneNumberToken();
                //mgr.VerifyChangePhoneNumberToken();
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            var props = new AuthenticationProperties
            {
                RedirectUri = "/LinkExternalAccount.aspx"
            };
            Request.GetOwinContext().Authentication.Challenge(props, "google");
        }
    }
}