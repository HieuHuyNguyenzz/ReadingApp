using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class dbinit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CusId = table.Column<int>(type: "int", nullable: false),
                    BookName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "varchar(max)", nullable: false),
                    BookDescription = table.Column<string>(type: "nvarchar(1000)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "varchar(max)", nullable: false),
                    BookDescription = table.Column<string>(type: "nvarchar(1000)", nullable: false),
                    Genre = table.Column<string>(type: "nvarchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CusId = table.Column<int>(type: "int", nullable: false),
                    CustomerName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    OrdersAddress = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    BookName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    DiscountPrice = table.Column<int>(type: "int", nullable: false),
                    FinalPrice = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "varchar(max)", nullable: false),
                    OrdersStatus = table.Column<string>(type: "nvarchar(100)", nullable: false, defaultValue: "Chờ xác nhận")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    UsersPassword = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    UserType = table.Column<int>(type: "int", nullable: false, defaultValue: 2)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
