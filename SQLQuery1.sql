create database Books
go

create table Customer (

  Cus_id int ,
  ProductName nvarchar(50) ,
  Price int ,
  ProductImage varchar(50) ,
  ProductDescription nvarchar(50) ,
  Category int ,
  Brand nvarchar (50) 
  Primary key (Cus_id) 

  )
  go

  create table Cart (

  Cart_id int ,
  Cus_id int ,
  ProductName nvarchar(50) ,
  Price int ,
  ProductImage varchar(50) ,
  ProductDescription nvarchar(50),
  Quantity int ,
  Primary key (Cart_id) 

  )

  go

  create table Users (

  Users_id int ,
  UserName nvarchar(50) , 
  FullName nvarchar(50) ,
  Users_password nvarchar(50) , 
  Email nvarchar(100),
  Phone nvarchar(50),
  UserType int ,
  Primary key (Users_id) 

  )

  go

  create table Orders (

  Orders_id int ,
  Cus_id int ,
  CustomerName nvarchar(50),
  PhoneNumber  nvarchar(50),
  Orders_Address nvarchar(50),
  ProductName nvarchar(50),
  Price int ,
  Discount nvarchar(50),
  DiscountPrice int ,
  FinalPrice int ,
  ProductImage nvarchar(50), 
  Orders_Status  nvarchar(50),
  Primary key (Orders_id) 

  )
  go

  Alter table Cart 
		add constraint FK_C1
		foreign key (Cus_id)
		references Customer (Cus_id)
		go

  Alter table Orders 
		add constraint FK_Order1
		foreign key (Cus_id)
		references Customer (Cus_id)
		go