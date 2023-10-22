using Microsoft.IdentityModel.Tokens;
using Backend.Constants;
using Backend.Dto.User;
using Backend.Models;
using Backend.Exceptions;
using Backend.Services.Interfaces;
using Backend.Utils;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Numerics;
using System.Security.Claims;
using System.Text;

namespace Backend.Services.Implements
{
    public class UserService : IUserService
    {
        private readonly ILogger _logger;
        private readonly QuanlysachContext _dbContext;
        private readonly IConfiguration _configuration;

        public UserService(ILogger<CustomerService> logger, QuanlysachContext dbContext, IConfiguration configuration)
        {
            _logger = logger;
            _dbContext = dbContext;
            _configuration = configuration;
        }
        public List<UserPriceDto> GetAll()
        {
            List<UserPriceDto> result = new List<UserPriceDto>();
            var listUser = from user in _dbContext.Users

                           select new User
                           {
                               UsersId = user.UsersId,
                               FullName = user.FullName,
                               UserName = user.UserName,
                               UsersPassword = user.UsersPassword,
                               Email = user.Email,
                               Phone = user.Phone,
                               UserType = user.UserType
                           };
            foreach (var items in listUser)
            {
                int total = _dbContext.Orders.Where(o => o.CusId == items.UsersId).Sum(i => i.FinalPrice);
                var user = new UserPriceDto()
                {
                    UsersId = items.UsersId,
                    FullName = items.FullName,
                    UserName = items.UserName,
                    UsersPassword = items.UsersPassword,
                    Email = items.Email,
                    Phone = items.Phone,
                    UserType = items.UserType,
                    TotalPrice = total,
                };
                result.Add(user);
            }
            return result;
        }

        public void UpdateUser(User input)
        {
            var user = _dbContext.Users.FirstOrDefault(p => p.UsersId == input.UsersId);
            if (user != null)
            {
                user.FullName = input.FullName;
                user.Phone = input.Phone;

            }
            _dbContext.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            var user = _dbContext.Users.FirstOrDefault(p => p.UsersId == id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);
            }
            _dbContext.SaveChanges();
        }

        public User GetbyId(int id)
        {
            var user = _dbContext.Users.FirstOrDefault((p) => p.UsersId == id);
            return user;
        }
        public void Create(CreateUserDto input)
        {
            if (_dbContext.Users.Any(u => u.UserName == input.UserName))
            {
                throw new UserFriendlyException($"UserName \"{input.UserName}\" already exists");
            }
            _dbContext.Users.Add(new User
            {
                FullName = input.FullName,
                UserName = input.UserName,
                UsersPassword = CommonUtils.CreateMD5(input.UsersPassword),
                Email = input.Email,
                Phone = input.Phone,
                UserType = input.UserType
            });
            _dbContext.SaveChanges();
        }
        public void Update(UpdateUserDto input)
        {
            var user = _dbContext.Users.FirstOrDefault(p => p.UsersId == input.UsersId);
            if (user != null)
            {
                user.UsersPassword = CommonUtils.CreateMD5(input.UsersPassword);
            }
            _dbContext.SaveChanges();
        }
        public string Login(LoginDto input)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.UserName == input.UserName);
            if (CommonUtils.CreateMD5(input.UsersPassword) == user.UsersPassword)
            {
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub,user.UsersId.ToString()),
                    new Claim(JwtRegisteredClaimNames.Name,user.UserName),
                    new Claim(CustomClaimTypes.UserType,user.UserType.ToString())
                };
                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddSeconds(_configuration.GetValue<int>("JWT:Expires")),
                    claims: claims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            else
            {
                throw new UserFriendlyException($"Password incorrect!");
            }
        }
    }
}
