﻿namespace Backend.Dto.Customers
{
    public class UpdateCustomerDto
    {
        public int Id { get; set; }
        public string BookImage { get; set; }
        public string BookName { get; set; }
        public int Price { get; set; }
        public string BookDescription { get; set; }
    }
}
