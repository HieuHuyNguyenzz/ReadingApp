using Backend.Dto.User;
using Backend.Models;

namespace Backend.Services.Interfaces
{
    public interface IUserService
    {
        void Create(CreateUserDto input);
        List<UserPriceDto> GetAll();
        User GetbyId(int id);
        string Login(LoginDto input);
        void Update(UpdateUserDto input);
        void UpdateUser(User input);
        void DeleteUser(int id);
    }
}
