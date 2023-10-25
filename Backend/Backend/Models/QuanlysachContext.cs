using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Backend.Constants;

namespace Backend.Models;

public partial class QuanlysachContext : DbContext
{
    public QuanlysachContext()
    {
    }

    public QuanlysachContext(DbContextOptions<QuanlysachContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cart>(entity =>
        {
            entity.ToTable("Cart");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd().IsRequired();
            entity.Property(e => e.CusId).HasColumnType("int").IsRequired();
            entity.Property(e => e.BookName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.Price).HasColumnType("int").IsRequired();
            entity.Property(e => e.BookImage).HasColumnType("varchar(max)").IsRequired();
            entity.Property(e => e.BookDescription).HasColumnType("nvarchar(1000)").IsRequired();
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.ToTable("Customer");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd().IsRequired();
            entity.Property(e => e.BookName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.Price).HasColumnType("int").IsRequired();
            entity.Property(e => e.BookImage).HasColumnType("varchar(max)").IsRequired();
            entity.Property(e => e.BookDescription).HasColumnType("nvarchar(1000)").IsRequired();
            entity.Property(e => e.Genre).HasColumnType("nvarchar(50)").IsRequired();
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.ToTable("Order");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd().IsRequired();
            entity.Property(e => e.CusId).HasColumnType("int").IsRequired();
            entity.Property(e => e.CustomerName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.PhoneNumber).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.OrdersAddress).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.BookName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.Price).HasColumnType("int").IsRequired();
            entity.Property(e => e.Discount).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.DiscountPrice).HasColumnType("int").IsRequired();
            entity.Property(e => e.FinalPrice).HasColumnType("int").IsRequired();
            entity.Property(e => e.BookImage).HasColumnType("varchar(max)").IsRequired();
            entity.Property(e => e.OrdersStatus).HasColumnType("nvarchar(100)").HasDefaultValue("Chờ xác nhận").IsRequired();
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd().IsRequired();
            entity.Property(e => e.UserName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.FullName).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.UsersPassword).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.Email).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.Phone).HasColumnType("nvarchar(50)").IsRequired();
            entity.Property(e => e.UserType).HasColumnType("int").HasDefaultValue(UserTypes.Customer).IsRequired();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
