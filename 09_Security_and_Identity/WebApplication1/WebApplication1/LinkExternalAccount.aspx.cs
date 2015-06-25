using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class LinkExternalAccount : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            this.RegisterAsyncTask(new PageAsyncTask(async () =>
            {
                var cp = (ClaimsPrincipal)User;

                var result = await Request.GetOwinContext().Authentication.AuthenticateAsync("temp");
                if (result != null && result.Identity != null && result.Identity.IsAuthenticated)
                {
                    var externalClaims = result.Identity.Claims;
                    var id_claim = externalClaims.Single(x => x.Type == ClaimTypes.NameIdentifier);
                    var id = id_claim.Value;
                    var provider = id_claim.Issuer;

                    var current_id = cp.FindFirst(ClaimTypes.NameIdentifier).Value;

                    using (var mgr = Identity.MyUserManager.Create())
                    {
                        await mgr.AddLoginAsync(current_id, new UserLoginInfo(provider, id));
                        Request.GetOwinContext().Authentication.SignOut("temp");

                        Response.Redirect("~/");
                    }
                }
            }));
        }
    }
}