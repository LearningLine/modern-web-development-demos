using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using WebApplication1.Identity;

namespace WebApplication1
{
    public partial class ExternalCallback : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.RegisterAsyncTask(new PageAsyncTask(async () =>
            {
                var result = await Request.GetOwinContext().Authentication.AuthenticateAsync("temp");
                if (result != null && result.Identity != null && result.Identity.IsAuthenticated)
                {
                    var externalClaims = result.Identity.Claims;
                    var id_claim = externalClaims.Single(x => x.Type == ClaimTypes.NameIdentifier);
                    var id = id_claim.Value;
                    var provider = id_claim.Issuer;

                    using (var mgr = Identity.MyUserManager.Create())
                    {
                        var user = await mgr.FindAsync(new UserLoginInfo(provider, id));
                        if (user != null)
                        {
                            Request.GetOwinContext().Authentication.SignOut("temp");
                            var ci = await mgr.CreateIdentityAsync(user, "cookie");
                            Request.GetOwinContext().Authentication.SignIn(ci);
                            
                            Response.Redirect("~/", false);
                        }
                        else
                        {
                            // ... somehow register the user
                        }
                    }
                }
                else
                {
                    Response.Redirect("~/Login.aspx");
                }
            }));

        }
    }
}