using System;
using System.Collections.Generic;
using System.Text;

namespace StartUpBox.Framework.Data.Entity
{
    public interface IEntity<T>
    {
        public T Key { get; set; }
}
}
