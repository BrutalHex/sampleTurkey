using Autofac;
using Autofac.Core;
using StartUpBox.ServiceContract;

namespace StartUpBox.Service
{
    public class AutofacModule : Module, IModule
    {
        protected override void Load(ContainerBuilder builder)
        {
            
            builder.RegisterType<UserService>().As<IUserService>() 
                .InstancePerLifetimeScope();

           

        }
    }
}
