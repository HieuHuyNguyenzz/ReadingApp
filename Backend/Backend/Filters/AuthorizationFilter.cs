using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Backend.Constants;

namespace Backend.Filters
{
    public class AuthorizationFilter : Attribute, IAuthorizationFilter
    {
        private readonly int[] _userTypes;
        public AuthorizationFilter(params int[] userTypes)
        {
            _userTypes = userTypes;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var user = context.HttpContext.User;
            var claims = user.Claims.ToList();
            var userTypeClaim = claims.FirstOrDefault(c => c.Type == CustomClaimTypes.UserType);
            if (userTypeClaim != null)
            {
                int userType = int.Parse(userTypeClaim.Value);
                if (!_userTypes.Contains(userType))
                {
                    context.Result = new UnauthorizedObjectResult(new { message = $"User type = {userType} not entitled to use" });
                };
            }
            else
            {
                context.Result = new UnauthorizedObjectResult(new { message = "You are not entitled to use" });
            }

        }
    }
}
