using System;
using System.Collections.Generic;
using System.Text;

namespace StartUpBox.Framework.Resource
{
    public class JsonLocalization
    {
        public string Key { get; set; }
        public Dictionary<string, string> LocalizedValue = new Dictionary<string, string>();

    }
}
