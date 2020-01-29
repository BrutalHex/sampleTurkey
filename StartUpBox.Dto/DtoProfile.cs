using AutoMapper;
using StartUpBox.Domain.Entity;

namespace StartUpBox.Dto
{
    public class DtoProfile : Profile
    {
        public DtoProfile()
        {
            CreateMap<NewUser , UserEntity>();
            CreateMap<EditUser , UserEntity>();
            CreateMap<GetUser , UserEntity>().ReverseMap();
        }
    }


}
