
using System.ComponentModel.DataAnnotations.Schema;

namespace StartUpBox.Framework.Data.Entity
{
    public class BaseEntity<T>: IEntity<T>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Key { get; set; }
    }
}
