using Backend.Dto.Customers;
using Backend.Dto.Shared;
using Backend.Models;

namespace Backend.Services.Interfaces
{
    public interface IOrderService
    {
        void Create(CreateOrderDto input);
        void Delete(int id);
        void DeleteAllFull();
        List<CreateOrderDto> GetAll();
        PageResultDto<List<Order>> GetAllWithPage(FilterDto input);
    }
}
