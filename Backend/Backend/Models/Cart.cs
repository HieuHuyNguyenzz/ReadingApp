using System;
using System.Collections.Generic;

namespace Backend.Models;

public  class Cart
{
    public int Id { get; set; }

    public int CusId { get; set; }

    public string BookName { get; set; }

    public int Price { get; set; }

    public string BookImage { get; set; }

    public string BookDescription { get; set; }


}
