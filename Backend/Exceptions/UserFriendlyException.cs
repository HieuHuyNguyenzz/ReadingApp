namespace Backend.Exceptions;

    public class UserFriendlyException : Exception
    {
        public UserFriendlyException(string message) : base(message) {
        }
}
