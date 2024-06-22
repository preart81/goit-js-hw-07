const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  } else {
    const formData = {
      // email: email.value.trim(),
      [event.currentTarget.elements.email.name]: email.value.trim(),
      // password: password.value.trim(),
      [event.currentTarget.elements.password.name]: password.value.trim(),
    };

    console.log(formData);
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", onFormSubmit);
