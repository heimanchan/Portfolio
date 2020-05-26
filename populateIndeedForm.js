function autoPopulateIndeedApplication(firstName, lastName, email, phone) {
  let firstNameInput = document.getElementById("input-applicant.firstName");
  let lastNameInput = document.getElementById("input-applicant.lastName");
  let emailInput = document.getElementById("input-applicant.email");
  let phoneInput = document.getElementById("input-applicant.phone");

  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  emailInput.value = email;
  phoneInput.value = phone;
}

autoPopulateIndeedApplication("Dave", "Chan", "heimanchan0@gmail.com", "(415) 335-5113")