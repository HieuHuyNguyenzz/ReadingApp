using System.ComponentModel.DataAnnotations;

namespace Backend.Dto.Customers
{
    public class CreateCustomerDto
    {
        public string BookImage { get; set; }
        public string BookName { get; set; }
        public int Price { get; set; }
        public string BookDescription { get; set; }
        public int Category { get; set; }
    }
}
