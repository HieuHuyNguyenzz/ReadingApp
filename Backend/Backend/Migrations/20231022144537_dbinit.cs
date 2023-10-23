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
                name: "Customer",
                columns: table => new
                {
                    Cus_id = table.Column<int>(type: "int", nullable: false),
                    BookName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    BookDescription = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Category = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Customer__0AC8019F03CDA31D", x => x.Cus_id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Users_id = table.Column<int>(type: "int", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Users_password = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    UserType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Users__EB6B2D45ADE96DC3", x => x.Users_id);
                });

            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    Cart_id = table.Column<int>(type: "int", nullable: false),
                    Cus_id = table.Column<int>(type: "int", nullable: false),
                    BookName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    BookDescription = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Cart__D6862FC14657D799", x => x.Cart_id);
                    table.ForeignKey(
                        name: "FK_C1",
                        column: x => x.Cus_id,
                        principalTable: "Customer",
                        principalColumn: "Cus_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Orders_id = table.Column<int>(type: "int", nullable: false),
                    Cus_id = table.Column<int>(type: "int", nullable: false),
                    CustomerName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Orders_Address = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BookName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DiscountPrice = table.Column<int>(type: "int", nullable: false),
                    FinalPrice = table.Column<int>(type: "int", nullable: false),
                    BookImage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Orders_Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Orders__B2D00CA45A5E366D", x => x.Orders_id);
                    table.ForeignKey(
                        name: "FK_Order1",
                        column: x => x.Cus_id,
                        principalTable: "Customer",
                        principalColumn: "Cus_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cart_Cus_id",
                table: "Cart",
                column: "Cus_id");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Cus_id",
                table: "Orders",
                column: "Cus_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Customer");
        }
    }
}
