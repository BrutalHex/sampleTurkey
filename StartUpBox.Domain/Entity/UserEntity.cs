using System;
using System.Collections.Generic;
using System.Text;
using StartUpBox.Framework.Data.Entity;

namespace StartUpBox.Domain.Entity
{
    public class UserEntity : BaseEntity<int>
    {
        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Password { get; set; }


    }
}
