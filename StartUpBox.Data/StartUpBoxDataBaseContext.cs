using Microsoft.EntityFrameworkCore;
using StartUpBox.Framework.Data;


namespace StartUpBox.Data
{
   public  class StartUpBoxDataBaseContext : DbContext
    {
 
        public StartUpBoxDataBaseContext(DbContextOptions<StartUpBoxDataBaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.AddEntityConfigurationsFromAssembly(GetType().Assembly);
        }


    }
}
