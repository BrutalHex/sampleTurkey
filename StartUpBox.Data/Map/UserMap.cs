using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations.Schema;
using StartUpBox.Domain.Entity;
using StartUpBox.Framework.Data;

namespace StartUpBox.Data.Map
{
    public class UserMap: BaseMap<UserEntity>
    {
        public UserMap():base("User")
        {

        }
        public override void Configure(EntityTypeBuilder<UserEntity> builder)
        {


            builder.ToTable(TableName, "dbo") ;

            builder.HasKey(o => o.Key);


            builder.Property(t => t.Key).HasColumnName(FormatFieldName("Key"));

            builder.Property(t => t.UserName).HasColumnName(FormatFieldName( "UserName"));
            builder.Property(t => t.Firstname).HasColumnName(FormatFieldName( "Firstname"));
            builder.Property(t => t.Lastname).HasColumnName(FormatFieldName("Lastname"));
            builder.Property(t => t.Password).HasColumnName(FormatFieldName("Password"));
        }

    }
}
