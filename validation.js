$(function () {
  $("input").on("blur", function () {
    if ($("#AddEmployeeForm").valid()) {
      $("#submit").prop("disabled", false);
    } else {
      $("#submit").prop("disabled", true);
    }

    if ($("#AsAbove").is(":checked")) {
      $("#NewMailingAddress").prop("disabled", true);
    } else {
      $("#NewMailingAddress").prop("disabled", false);
    }
  });

  $.validator.addMethod(
    "greaterThanLastYear",
    function (value, element) {
      var currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 1);
      if (new Date(value)) {
        return new Date(value) > new Date(currentDate);
      }
      return false;
    },
    "Employee start date must be within the last year or in the future."
  );

  if (!$("#FirstName").val()) {
    $("#submit").prop("disabled", true);
  }

  $("#AddEmployeeForm").validate({
    rules: {
      EmailAddress: {
        required: true,
        email: true,
      },
      FirstName: {
        required: true,
      },
      LastName: {
        required: true,
      },
      FullAddress: {
        required: true,
      },
      PhoneNumber: {
        required: true,
      },
      CitizenStatus: {
        required: true,
      },
      StartDate: {
        required: true,
      },
      EmploymentType: {
        required: true,
      },
      PositionTitle: {
        required: true,
      },
      EmergencyName: {
        required: true,
      },
      EmergencyRelationship: {
        required: true,
      },
      EmergencyNumber: {
        required: true,
      },
      NewMailingAddress: {
        required: () => {
          return $("#AsAbove").is(":not(:checked)");
        },
      },
      StartDate: {
        required: true,
        greaterThanLastYear: true,
      },
    },
    messages: {
      FirstName: {
        required: "Please enter employee's first name",
      },
      EmailAddress: {
        required: "Please enter employee's email address",
        email: "Please enter a valid email address",
      },
      LastName: {
        required: "Please enter employee's last name",
      },
      FullAddress: {
        required: "Please enter employee's current address",
      },
      PhoneNumber: {
        required: "Please enter employee's phone number",
      },
      CitizenStatus: {
        required: "Please enter employee's citizenship status",
      },
      StartDate: {
        required: "Please enter employee's starting date (within last year)",
      },
      EmploymentType: {
        required: "Please enter the type of employment",
      },
      PositionTitle: {
        required: "Please enter employment position",
      },
      EmergencyName: {
        required: "Please enter emergency contact name",
      },
      EmergencyRelationship: {
        required: "Please enter emergency contact relationship",
      },
      EmergencyNumber: {
        required: "Please enter emergency contact number",
      },
      NewMailingAddress: {
        required: "Enter a new mailing address or check same 'As Above'",
      },
    },
  });
});
