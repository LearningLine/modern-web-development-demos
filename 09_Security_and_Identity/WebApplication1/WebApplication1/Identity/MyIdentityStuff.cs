using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Identity
{
    public class MyUser : IdentityUser
    {
    }

    public class MyIdentityDbContext : IdentityDbContext<MyUser>
    {
        public MyIdentityDbContext(string connectionStringName)
            : base(connectionStringName)
        {
        }
    }

    public class MyUserStore : UserStore<MyUser>
    {
        public MyUserStore(MyIdentityDbContext ctx)
            : base(ctx)
        {
        }
    }

    public class MyUserManager : UserManager<MyUser>
    {
        public MyUserManager(MyUserStore store)
            : base(store)
        {
        }

        public static MyUserManager Create()
        {
            var ctx = new MyIdentityDbContext("MyUsers");
            var store = new MyUserStore(ctx);
            var mgr = new MyUserManager(store);
            return mgr;
        }
    }
}