using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Light_Street_Challenge.Startup))]
namespace Light_Street_Challenge
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
