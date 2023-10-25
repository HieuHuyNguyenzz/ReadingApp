using Backend.Dto.Customers;
using Backend.Dto.Shared;
using Backend.Models;
using Backend.Services.Interfaces;


namespace Backend.Services.Implements
{
    public class OrderService : IOrderService
    {
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        private readonly QuanlysachContext _dbContext;
        public OrderService(ILogger<OrderService> logger, IConfiguration configuration, QuanlysachContext dbContext)
        {
            _logger = logger;
            _configuration = configuration;
            _dbContext = dbContext;
        }
        public List<Order> GetAll()
        {
            var listOrder = from order in _dbContext.Orders
                            select new Order
                            {
                                Id = order.Id,
                                CusId = order.CusId,
                                CustomerName = order.CustomerName,
                                PhoneNumber = order.PhoneNumber,
                                OrdersAddress = order.OrdersAddress,
                                BookName = order.BookName,
                                Price = order.Price,
                                Discount = order.Discount,
                                DiscountPrice = order.DiscountPrice,
                                FinalPrice = order.FinalPrice,
                                BookImage = order.BookImage,
                                OrdersStatus = order.OrdersStatus,
                            };
            return listOrder.ToList();
        }
        public PageResultDto<List<Order>> GetAllWithPage(FilterDto input)
        {
            var orderQuery = _dbContext.Orders.AsQueryable();
            if (input.IdKeyWord != 0)
            {
                orderQuery = orderQuery.Where(s =>
                s.CusId == input.IdKeyWord);
            }
            int totalItem = orderQuery.Count();
            orderQuery = orderQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);

            return new PageResultDto<List<Order>>
            {
                Items = orderQuery.ToList(),
                TotalItem = totalItem,
            };
        }
        public void Create(CreateOrderDto input)
        {

            _dbContext.Orders.Add(new Order
            {
                CusId = input.CusId,
                CustomerName = input.CustomerName,
                PhoneNumber = input.PhoneNumber,
                OrdersAddress = input.OrdersAddress,
                BookName = input.BookName,
                Price = input.Price,
                Discount = input.Discount,
                DiscountPrice = input.DiscountPrice,
                FinalPrice = input.FinalPrice,
                BookImage = input.BookImage,
                OrdersStatus = input.OrdersStatus,
            });
            _dbContext.SaveChanges();
        }
        public void Delete(int id)
        {
            var order = _dbContext.Orders.FirstOrDefault((p) => p.Id == id);
            if (order != null)
            {
                _dbContext.Orders.Remove(order);
            }
            _dbContext.SaveChanges();
        }
        public void DeleteAllFull()
        {
            var rows = from o in _dbContext.Orders select o;
            foreach (var row in rows)
            {
                _dbContext.Orders.Remove(row);
            }
            _dbContext.SaveChanges();
        }
    }
}
