namespace Backend.Dto.Cart
{
    public class CreateCartDto
    {
        public int CusId { get; set; }
        public string BookImage { get; set; }
        public string BookName { get; set; }
        public int Price { get; set; }
        public string BookDescription { get; set; }
    }
}
