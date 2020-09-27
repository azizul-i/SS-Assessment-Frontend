using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SSForms.Models
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FormID { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String FullAddress { get; set; }
        public bool IsMailingSameAsFullAddress { get; set; }
        public String NewMailingAddress { get; set; }
        public String EmailAddress { get; set; }
        public String PhoneNumber { get; set; }
        public String CitizenStatus { get; set; }
        public DateTime StartDate { get; set; }
        public String EmploymentType { get; set; }
        public String PositionTitle { get; set; }
        public String EmergencyName { get; set; }
        public String EmergencyRelationship { get; set; }
        public String EmergencyNumber { get; set; }



    }
}
