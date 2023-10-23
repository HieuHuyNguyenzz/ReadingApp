using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

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
#warning  protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-2LQT3CS;Initial Catalog=QUANLYSACH;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => e.CartId).HasName("PK__Cart__D6862FC14657D799");

            entity.ToTable("Cart");

            entity.Property(e => e.CartId)
                .ValueGeneratedNever()
                .HasColumnName("Cart_id");
            entity.Property(e => e.BookDescription).HasMaxLength(50);
            entity.Property(e => e.BookImage)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BookName).HasMaxLength(50);
            entity.Property(e => e.CusId).HasColumnName("Cus_id");

            entity.HasOne(d => d.Cus).WithMany(p => p.Carts)
                .HasForeignKey(d => d.CusId)
                .HasConstraintName("FK_C1");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CusId).HasName("PK__Customer__0AC8019F03CDA31D");

            entity.ToTable("Customer");

            entity.Property(e => e.CusId)
                .ValueGeneratedNever()
                .HasColumnName("Cus_id");
            entity.Property(e => e.BookDescription).HasMaxLength(50);
            entity.Property(e => e.BookImage)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BookName).HasMaxLength(50);
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrdersId).HasName("PK__Orders__B2D00CA45A5E366D");

            entity.Property(e => e.OrdersId)
                .ValueGeneratedNever()
                .HasColumnName("Orders_id");
            entity.Property(e => e.BookImage).HasMaxLength(50);
            entity.Property(e => e.BookName).HasMaxLength(50);
            entity.Property(e => e.CusId).HasColumnName("Cus_id");
            entity.Property(e => e.CustomerName).HasMaxLength(50);
            entity.Property(e => e.Discount).HasMaxLength(50);
            entity.Property(e => e.OrdersAddress)
                .HasMaxLength(50)
                .HasColumnName("Orders_Address");
            entity.Property(e => e.OrdersStatus)
                .HasMaxLength(50)
                .HasColumnName("Orders_Status");
            entity.Property(e => e.PhoneNumber).HasMaxLength(50);

            entity.HasOne(d => d.Cus).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CusId)
                .HasConstraintName("FK_Order1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UsersId).HasName("PK__Users__EB6B2D45ADE96DC3");

            entity.Property(e => e.UsersId)
                .ValueGeneratedNever()
                .HasColumnName("Users_id");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Phone).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(50);
            entity.Property(e => e.UsersPassword)
                .HasMaxLength(50)
                .HasColumnName("Users_password");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
