using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SSForms.Migrations
{
    public partial class ModelCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    FormID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<int>(nullable: false),
                    FullAddress = table.Column<int>(nullable: false),
                    IsMailingSameAsFullAddress = table.Column<bool>(nullable: false),
                    NewMailingAddress = table.Column<int>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    CitizenStatus = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EmploymentType = table.Column<string>(nullable: true),
                    PositionTitle = table.Column<string>(nullable: true),
                    EmergencyName = table.Column<string>(nullable: true),
                    EmergencyRelationship = table.Column<string>(nullable: true),
                    EmergencyNumber = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.FormID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Student");
        }
    }
}
