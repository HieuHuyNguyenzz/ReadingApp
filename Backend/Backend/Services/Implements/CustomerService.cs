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
                                  Id = customer.Id,
                                  BookName = customer.BookName,
                                  BookImage = customer.BookImage,
                                  Price = customer.Price,
                                  BookDescription = customer.BookDescription,
                                  Genre = customer.Genre,
                                  Author = customer.Author,
                                  rate = customer.rate,
                                  preview = customer.preview
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
            var student = _dbContext.Customers.FirstOrDefault((p) => p.Id == id);
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
                Genre = input.Genre,
                Author = input.Author,
                rate = input.rate,
                preview = input.preview
             });
            _dbContext.SaveChanges();
        }
        public void Update(UpdateCustomerDto input)
        {
            var customer = _dbContext.Customers.FirstOrDefault(p => p.Id == input.Id);
            if (customer != null)
            {
                customer.Price = input.Price;
                customer.BookName = input.BookName;
                customer.BookDescription = input.BookDescription;
                customer.Author = input.Author;
                customer.rate = input.rate;
                customer.preview = input.preview;

            }
            _dbContext.SaveChanges();
        }
        public void Delete(int id)
        {
            var customer = _dbContext.Customers.FirstOrDefault((p) => p.Id == id);
            if (customer != null)
            {
                _dbContext.Customers.Remove(customer);
            }
            _dbContext.SaveChanges();
        }
    }
}
