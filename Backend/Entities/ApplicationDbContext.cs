using Microsoft.EntityFrameworkCore;
using Backend.Constants;
using Backend.Entities;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Backend.Entities
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Books> Books { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Notifications> Notifications { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<Publishers> Publishers { get; set; }
        public DbSet<Reviews> Reviews { get; set; }
        public DbSet<Transactions> Transactions { get; set; }
        public DbSet<Users> Userss { get; set; }


        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("Users");
                entity.HasKey(e => e.Users_id);
                entity.Property(e => e.Users_id).ValueGeneratedOnAdd().IsRequired();
                entity.Property(e => e.Username).HasColumnType("nvarchar(50)").IsRequired();
                entity.Property(e => e.Users_Password).HasColumnType("nvarchar(50)").IsRequired();
                entity.Property(e => e.Fullname).HasColumnType("nvarchar(50)").IsRequired();
                entity.Property(e => e.Birthday).HasColumnType("datetime").IsRequired();
                entity.Property(e => e.Subscription_status).HasColumnType("nvarchar(50)").IsRequired();
                entity.Property(e => e.Country).HasColumnType("nvarchar(50)").IsRequired();
            }
        }
}
