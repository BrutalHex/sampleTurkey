using System;
using System.Collections.Generic;
using System.Text;

namespace StartUpBox.Framework.Data.Filter
{
   
     public class FilterInfo
    {
        public string Logic { get; set; }
        public FilterData[] Filters { get; set; }
    }
    public class FilterData
    {
        public string Operator { get; set; }
        public string Field { get; set; }
        public string Value { get; set; }
    }
}
