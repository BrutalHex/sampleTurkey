using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace StartUpBox.Data
{
    public class StartUpBoxDataBaseContextDesignTimeFactory : IDesignTimeDbContextFactory<StartUpBoxDataBaseContext>
    {
        public StartUpBoxDataBaseContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<StartUpBoxDataBaseContext>();
            optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=StartUpBox;user id=sa;password=zelda@123456;MultipleActiveResultSets=True;");

            return new StartUpBoxDataBaseContext(optionsBuilder.Options);
        }
    }
}
