using Backend.Dto.Customers;
using Backend.Dto.Shared;
using Backend.Models;
using Backend.Exceptions;
using Backend.Services.Interfaces;

namespace Backend.Services.Implements
{
    public class CustomerService : ICustomerService
    {
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        private readonly QuanlysachContext _dbContext;
        public CustomerService(ILogger<CustomerService> logger, IConfiguration configuration, QuanlysachContext dbContext)
        {
            _logger = logger;
            _configuration = configuration;
            _dbContext = dbContext;
        }
        public List<Customer> GetAll()
        {
            var listStudent = from customer in _dbContext.Customers
                              select new Customer
                              {
                                  CusId = customer.CusId,
                                  BookName = customer.BookName,
                                  BookImage = customer.BookImage,
                                  Price = customer.Price,
                                  BookDescription = customer.BookDescription,
                                  Category = customer.Category
                              };
            return listStudent.ToList();


        }
        public PageResultDto<List<Customer>> GetAllWithPage(FilterDto input)
        {
            var customerQuery = _dbContext.Customers.AsQueryable();
            if (input.Keyword != null)
            {
                customerQuery = customerQuery.Where(s => s.BookName != null &&
                s.BookName.Contains(input.Keyword));
            }
            int totalItem = customerQuery.Count();
            customerQuery = customerQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);

            return new PageResultDto<List<Customer>>
            {
                Items = customerQuery.ToList(),
                TotalItem = totalItem,
            };
        }
        public Customer GetbyId(int id)
        {
            var student = _dbContext.Customers.FirstOrDefault((p) => p.CusId == id);
            return student;
        }
        public void Create(CreateCustomerDto input)
        {
            _dbContext.Customers.Add(new Customer
            {
                BookImage = input.BookImage,
                Price = input.Price,
                BookName = input.BookName,
                BookDescription = input.BookDescription,
                Category = input.Category
            });
            _dbContext.SaveChanges();
        }
        public void Update(UpdateCustomerDto input)
        {
            var customer = _dbContext.Customers.FirstOrDefault(p => p.CusId == input.CusId);
            if (customer != null)
            {
                customer.Price = input.Price;
                customer.BookName = input.BookName;
                customer.BookDescription = input.BookDescription;

            }
            _dbContext.SaveChanges();
        }
        public void Delete(int id)
        {
            var customer = _dbContext.Customers.FirstOrDefault((p) => p.CusId == id);
            if (customer != null)
            {
                _dbContext.Customers.Remove(customer);
            }
            _dbContext.SaveChanges();
        }
    }
}
