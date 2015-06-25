using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.AspNet.Identity;
using WebApplication1.Identity;

namespace WebApplication1
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void _b_Click(object sender, EventArgs e)
        {
            using (var mgr = Identity.MyUserManager.Create())
            {
                var user = new MyUser{
                    UserName = _username.Text
                };
                var result = mgr.Create(user, _password.Text);
                if (!result.Succeeded)
                {
                    _message.Text = result.Errors.First();
                }
                else
                {
                    _message.Text = "Success!";
                }
            }
        }
    }
}