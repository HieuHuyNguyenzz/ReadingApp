using System;
using System.Collections.Generic;

namespace Backend.Models;

public class Customer
{
    public int Id { get; set; }

    public string BookName { get; set; }

    public int Price { get; set; }

    public string BookImage { get; set; }

    public string BookDescription { get; set; }

    public string Genre { get; set; }
    public string Author { get; set; }
    public int rate { get; set; }
    public string preview { get; set; }

}
