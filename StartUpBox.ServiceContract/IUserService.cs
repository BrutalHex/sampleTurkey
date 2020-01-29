using StartUpBox.Domain.Entity;
using StartUpBox.Dto;
using StartUpBox.ServiceContract.Base;

namespace StartUpBox.ServiceContract
{
    public interface IUserService : ICrudServiceInt<UserEntity, GetUser , NewUser , EditUser >
    {
    }
}
