 
using StartUpBox.Framework.Dto;

namespace StartUpBox.Dto
{

    public class BaseUser 
    {
        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Password { get; set; }

    }

    public class NewUser : BaseUser, INewDto
    {

    }

    public class EditUser : NewUser , IEditDto<int>
    {
        public int Key { get; set; }
    }


    public class GetUser : EditUser 
    {
    }
}
