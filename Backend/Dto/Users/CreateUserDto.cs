namespace Backend.Dto
{
    public class CreateUserDto
    {
        private string _username;
        public string Username { get => _username; set => _username = value?.Trim(); }
        private string _password;
        public string Fullname { get; set; }
        public string Users_Password { get => _password; set => _password = value?.Trim(); }
        public string Country { get; set; }
    }
}
