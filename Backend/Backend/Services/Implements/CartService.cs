using Backend.Dto.Cart;
using Backend.Dto.Shared;
using Backend.Models;
using Backend.Services.Interfaces;

namespace Backend.Services.Implements
{
    public class CartService : ICartService
    {
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        private readonly QuanlysachContext _dbContext;
        public CartService(ILogger<CartService> logger, IConfiguration configuration, QuanlysachContext dbContext)
        {
            _logger = logger;
            _configuration = configuration;
            _dbContext = dbContext;
        }
        public List<Cart> GetAll()
        {
            var listCart = from cart in _dbContext.Carts
                           select new Cart
                           {
                               CartId = cart.CartId,
                               CusId = cart.CusId,
                               BookName = cart.BookName,
                               BookImage = cart.BookImage,
                               Price = cart.Price,
                               BookDescription = cart.BookDescription,
                           };
            return listCart.ToList();
        }
        public PageResultDto<List<Cart>> GetAllWithPage(FilterDto input)
        {
            var cartQuery = _dbContext.Carts.AsQueryable();
            if (input.IdKeyWord != 0)
            {
                cartQuery = cartQuery.Where(s =>
                s.CusId == input.IdKeyWord);
            }
            int totalItem = cartQuery.Count();
            cartQuery = cartQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);

            return new PageResultDto<List<Cart>>
            {
                Items = cartQuery.ToList(),
                TotalItem = totalItem,
            };
        }
        public Cart GetbyId(int id)
        {
            var cart = _dbContext.Carts.FirstOrDefault((p) => p.CartId == id);
            return cart;
        }
        public void Create(CreateCartDto input)
        {
            _dbContext.Carts.Add(new Cart
            {
                CusId = input.CusId,
                BookImage = input.BookImage,
                Price = input.Price,
                BookName = input.BookName,
                BookDescription = input.BookDescription,

            });
            _dbContext.SaveChanges();
        }
        public void Delete(int id)
        {
            var cart = _dbContext.Carts.FirstOrDefault((p) => p.CartId == id);
            if (cart != null)
            {
                _dbContext.Carts.Remove(cart);
            }
            _dbContext.SaveChanges();
        }
        public void DeleteAll(int id)
        {
            var rows = from o in _dbContext.Carts.Where(s => s.CusId == id) select o;
            foreach (var row in rows)
            {
                _dbContext.Carts.Remove(row);
            }
            _dbContext.SaveChanges();
        }
        public void DeleteAllFull()
        {
            var rows = from o in _dbContext.Carts select o;
            foreach (var row in rows)
            {
                _dbContext.Carts.Remove(row);
            }
            _dbContext.SaveChanges();
        }
    }
}
