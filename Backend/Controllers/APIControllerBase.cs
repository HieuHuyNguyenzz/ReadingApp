using Microsoft.AspNetCore.Mvc;
using Backend.Dto.Exceptions;
using Backend.Exceptions;

namespace Backend.Controllers
{
    public class APIControllerBase : ControllerBase
    {
        protected ILogger _logger;
        public APIControllerBase(ILogger logger)
        {
            _logger = logger;
        }
        protected IActionResult ReturnException(Exception ex)
        {
            if (ex is UserFriendlyException)
            {
                var userEx = ex as UserFriendlyException;
                return StatusCode(StatusCodes.Status500InternalServerError, new ExceptionBody
                {
                    Message = userEx.Message
                });
            }
            _logger.LogError(ex, ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, new ExceptionBody
            {
                Message = "Error!!!"
            });
        }
    }
}
