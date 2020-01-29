
using Microsoft.EntityFrameworkCore;
using StartUpBox.Domain.Entity;
using StartUpBox.Framework.Data;
using StartUpBox.RepositoryContract;

namespace StartUpBox.Repository
{
    public class UserRepository : GenericRepository<UserEntity,int>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context)
        {
        }
    }
}
