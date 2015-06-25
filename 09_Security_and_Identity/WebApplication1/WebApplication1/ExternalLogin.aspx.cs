using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class ExternalLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var provider = Request.QueryString["p"];
            var props = new AuthenticationProperties{
                RedirectUri = "/ExternalCallback.aspx"
            };
            Request.GetOwinContext().Authentication.Challenge(props, provider);
        }
    }
}