using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Cart
{
    public int CartId { get; set; }

    public int CusId { get; set; }

    public string BookName { get; set; }

    public int Price { get; set; }

    public string BookImage { get; set; }

    public string BookDescription { get; set; }

    public virtual Customer Cus { get; set; }
}
