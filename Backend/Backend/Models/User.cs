﻿using System;
using System.Collections.Generic;

namespace Backend.Models;

public  class User
{
    public int Id { get; set; }

    public string UserName { get; set; }

    public string FullName { get; set; }

    public string UsersPassword { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }

    public int UserType { get; set; }
}
