$(function () {
  var isNewMailingAddRequired = true;
  $("input").on("blur", function () {
    if ($("#AddEmployeeForm").valid()) {
      $("#submit").prop("disabled", false);
    } else {
      $("#submit").prop("disabled", true);
    }
  });

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
    },
  });
});
