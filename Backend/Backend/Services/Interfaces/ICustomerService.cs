using Backend.Dto.Customers;
using Backend.Dto.Shared;
using Backend.Models;

namespace Backend.Services.Interfaces
{
    public interface ICustomerService
    {
        void Create(CreateCustomerDto input);
        void Delete(int id);
        List<Customer> GetAll();
        PageResultDto<List<Customer>> GetAllWithPage(FilterDto input);
        Customer GetbyId(int id);
        void Update(UpdateCustomerDto input);
    }
}
