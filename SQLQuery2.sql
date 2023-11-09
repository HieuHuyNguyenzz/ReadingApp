create database docsach
go

create table Users (

      Users_id int ,
	  Username nvarchar(20),
	  Users_Password nvarchar(20),
	  Fullname nvarchar(20),
	  Birthday datetime ,
	  Country nvarchar(20),
	  Subscription_status nvarchar(20),
	  Notification_id int ,
	  Primary key (Users_id) 

	  )

	  go

	  create table Books (

      Books_id int ,
	  Title nvarchar(20),
	  Descriptions nvarchar(20),
	  Isbn nvarchar(20),
	  Publisher_id int ,
	  Genre_id int,
	  Cover_image_url nvarchar(20),
	  Book_Language nvarchar(20),
	  Book_length nvarchar(20),
	  File_size int,
	  noteworthy nvarchar(20),
	  Sales_count int,
	  View_count int ,
	  Promotion_id int ,
	  Primary key (Books_id) 

	  )

	  go 

	  create table Author (

	  Author_id int,
	  Author_name varchar(20),
	  Birthdate datetime,
	  Nationality varchar(20),
	  Primary key (Author_id) 

	  )

	  go 

	  create table Genre (

	  Genre_id int ,
	  Genre_Name varchar(20),
	  Primary key (Genre_id) 

	  )

	  go

	  create table Publishers (

	  Publisher_id int,
	  Publisher_Name varchar(20) ,
	  Country varchar(20),
	  Publisher_year varchar(20),
	  Primary key (Publisher_id)

	  )

	  go

	  create table Promotion (

	  Promotion_id int,
	  Promotion_Name varchar(20),
	  Discount_amount int,
	  Promotion_Start_date datetime,
	  Promotion_End_date datetime,
	  Promotion_Status varchar(20)
	  Primary key (Promotion_id) 

	  )

	  go

	  create table Reviews (

       Review_id int,
	   Users_id int,
	   Books_id int,
	   Rating varchar(50),
	   Review_text varchar(20),
	   Create_at varchar (20),
	   Detail varchar(20),
	   Primary key (Review_id)

	  )

	  go

	  create table Transactions (

	  Transaction_id int,
	  Users_id int,
	  Books_id int,
	  Amout int,
	  Rating nvarchar(20),
	  Comment nvarchar(20),
	  Transactions_Status nvarchar(20),
	  Invoice_id int, 
	  Primary key (Transaction_id)

	  )

	  go

	  create table Invoice (

	  Invoice_id int,
	  Invoice_Status nvarchar(20),
	  Create_by nvarchar(20),
	  Create_date datetime,
	  Delete_by nvarchar(20),
	  Delete_date datetime,
	  Update_by nvarchar(20),
	  Update_date datetime,
	  Primary key(Invoice_id) 

	  )

	  go 

	  create table Notifications(

	  Notification_id int,
	  Notification_Message nvarchar(20), 
	  Notification_Timestamp nvarchar(20),
	  New_books nvarchar(20),
	  Best_sellers nvarchar(20),
	  Recent_activites nvarchar(20),
	  Important_notifications nvarchar(20),
	  Primary key (Notification_id) 

	  )

	  go

	  create table Contact (

	  Contact_id int,
	  Name_admin nvarchar(20),
	  Detail nvarchar(20),
	  Contact_Status nvarchar(20),
	  Primary key (Contact_id)

	  )

	  go

	  create table Administrator (

	  Admin_id int,
	  Users_id int,
	  Contact_id int,
	  Primary key (Admin_id) 

	  )

	  Alter table Users
		add constraint FK_U1
		foreign key (Notification_id)
		references Notifications (Notification_id)
		go

	Alter table Books
		add constraint FK_B1
		foreign key (Publisher_id)
		references Publishers (Publisher_id)
		go

	Alter table Books
		add constraint FK_B2
		foreign key (Genre_id)
		references Genre (Genre_id)
		go

	Alter table Books
		add constraint FK_B3
		foreign key (Promotion_id)
		references Promotion (Promotion_id)
		go

	Alter table Reviews
		add constraint FK_R1
		foreign key (Users_id)
		references Users (Users_id)
		go

	Alter table Reviews
		add constraint FK_R2
		foreign key (Books_id)
		references Books (Books_id)
		go

	Alter table Transactions
		add constraint FK_T1
		foreign key (Users_id)
		references Users (Users_id)
		go

	Alter table Transactions
		add constraint FK_T2
		foreign key (Books_id)
		references Books (Books_id)
		go

	Alter table Transactions
		add constraint FK_T3
		foreign key (Invoice_id)
		references Invoice (Invoice_id)
		go

	Alter table Administrator
		add constraint FK_A1
		foreign key (Users_id)
		references Users (Users_id)
		go

	Alter table Administrator
		add constraint FK_A2
		foreign key (Contact_id)
		references Contact (Contact_id)
		go