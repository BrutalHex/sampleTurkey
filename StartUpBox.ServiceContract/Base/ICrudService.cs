using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using StartUpBox.Framework.Data.Entity;
using StartUpBox.Framework.Data.Filter;
using StartUpBox.Framework.Dto;

namespace StartUpBox.ServiceContract.Base
{
    public interface ICrudService<ITEntity, GetDto, nNewDto, EditDto, key>
         where ITEntity : BaseEntity<key>
         where GetDto : class
         where nNewDto : INewDto
         where EditDto : IEditDto<key>
    {
        Task<ValiditionMessage> Add(nNewDto receivedItem);
        Task<ValiditionMessage> Delete(key key);
        Task<PagedData<GetDto>> GetAll(QueryInfo searchRequestInfo);
        Task<IList<GetDto>> GetAll();
        GetDto GetById(key key);
        ITEntity GetEntity(key targetKey);
        Task<ValiditionMessage> Update(EditDto receivedItem);
    }

}
