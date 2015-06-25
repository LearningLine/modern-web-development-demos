using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.IsAuthenticated == false)
            {
                //Response.StatusCode = 401;
                //Response.End();
            }

            //var claims = new Claim[]{
            //    new Claim("name", "Brock Allen"),
            //    new Claim("id", "123"),
            //    new Claim("email", "brock@foo.com"),
            //    new Claim("role", "Admin"),
            //    new Claim("role", "Developer"),
            //};
            //var ci = new ClaimsIdentity(claims);
            //var cp = new ClaimsPrincipal(ci);

            //User
            //WindowsIdentity;
            //FormsIdentity;
            //RolePrincipal;

            if (!IsPostBack)
            {
                var cp = (ClaimsPrincipal)User;
                var claims = cp.Claims;
                var data = claims.Select(x => new { x.Type, x.Value });
                _grid.DataSource = data;
                _grid.DataBind();


                //cp.HasClaim();
                //cp.FindAll();
                //cp.FindFirst();

                var email_claim = cp.Claims.Where(x => x.Type == "email").FirstOrDefault();
                if (email_claim != null)
                {
                    var email = email_claim.Value;
                }
            }
            //var roles = claims.Where(x => x.Type == "role").Select(x=>x.Value).ToArray();
        }
    }
}