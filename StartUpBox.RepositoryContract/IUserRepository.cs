 
using StartUpBox.Domain.Entity;
using StartUpBox.Framework.Data.Abstraction;

namespace StartUpBox.RepositoryContract
{
    public interface IUserRepository: IGenericRepository<UserEntity,int>
    {
    }
}
