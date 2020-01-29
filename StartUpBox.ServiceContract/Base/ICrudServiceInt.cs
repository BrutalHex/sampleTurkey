using System;
using System.Collections.Generic;
using System.Text;
using StartUpBox.Framework.Data.Entity;
using StartUpBox.Framework.Dto;

namespace StartUpBox.ServiceContract.Base
{
    public interface ICrudServiceInt<ITEntity, GetDto, nNewDto, EditDto> : ICrudService<ITEntity, GetDto, nNewDto, EditDto, int>
    where ITEntity : BaseEntity<int>
        where GetDto : class
where nNewDto : INewDto
where EditDto : IEditDto<int>
    {

    }
}
