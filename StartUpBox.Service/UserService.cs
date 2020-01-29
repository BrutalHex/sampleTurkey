using AutoMapper;
using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StartUpBox.Domain.Entity;
using StartUpBox.Dto;
using StartUpBox.Framework.Data.Abstraction;
using StartUpBox.Framework.Data.Filter;
using StartUpBox.Framework.Dto;
using StartUpBox.Framework.Service;
using StartUpBox.RepositoryContract;
using StartUpBox.Service.Base;
using StartUpBox.ServiceContract;

namespace StartUpBox.Service
{


    public class UserService : CrudServiceInt<UserEntity, GetUser , NewUser , EditUser >, IUserService
    {

        private readonly IUserRepository _repository;
     

        public UserService(IUserRepository repository,  IMapper mapper,IUnitOfWork unit, IStringLocalizer localizer ) :   base(repository, mapper, unit, localizer)
        {

            
            _repository = repository;
            
       }

        protected override ValiditionMessage ValidateModel(INewDto newDto, int key)
        {
            var item = (NewUser )newDto;

                var res = base.ValidateModel(item);
                if (!res.Success)
                    return res;

                var existedData = _repository.GetAll().FirstOrDefault(a => (a.UserName == item.UserName) && a.Key != key);
                if (existedData != null)
                {
                    res.Success = false;

                    res.Message.Add(string.Format(Localizer["Messages.RepeatedRecord"], Localizer["Entity.UserName"], Localizer["UserEntity"]));
                }

                return res;         
        }
    }



  




}
