namespace Backend.Dto.Customers
{
    public class CreateOrderDto
    {
        public int CusId { get; set; }
        public string CustomerName { get; set; }
        public string PhoneNumber { get; set; }
        public string OrdersAddress { get; set; }
        public string BookName { get; set; }
        public int Price { get; set; }
        public string Discount { get; set; }
        public int DiscountPrice { get; set; }
        public int FinalPrice { get; set; }
        public string BookImage { get; set; }

        public string OrdersStatus { get; set; }
    }
}
