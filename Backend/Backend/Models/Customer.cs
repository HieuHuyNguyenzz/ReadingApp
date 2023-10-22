using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Customer
{
    public int CusId { get; set; }

    public string BookName { get; set; }

    public int Price { get; set; }

    public string BookImage { get; set; }

    public string BookDescription { get; set; }

    public int Category { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
