using AutoMapper;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Text;
using StartUpBox.Framework.Data.Abstraction;
using StartUpBox.Framework.Data.Entity;
using StartUpBox.Framework.Dto;
using StartUpBox.ServiceContract.Base;

namespace StartUpBox.Service.Base
{
    public abstract class CrudServiceInt<ITEntity,GetDto,nNewDto,EditDto>:CrudService<ITEntity, GetDto, nNewDto, EditDto,int>, ICrudServiceInt<ITEntity, GetDto, nNewDto, EditDto>
         where ITEntity : BaseEntity<int>
        where GetDto : class
           where nNewDto : INewDto
           where EditDto : IEditDto<int>
    {
       
        public CrudServiceInt(IGenericRepository<ITEntity, int> repository, IMapper mapper, IUnitOfWork unit, IStringLocalizer localizer) :base(repository,0, mapper, unit, localizer)
        {

        }
    }
}
