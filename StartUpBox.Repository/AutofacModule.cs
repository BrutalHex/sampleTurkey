using Autofac;
using StartUpBox.RepositoryContract;

namespace StartUpBox.Repository
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
 
            builder.RegisterType<UserRepository>().As<IUserRepository>()
                .InstancePerLifetimeScope();

          

        }
    }
}
