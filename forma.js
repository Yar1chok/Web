const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const newsletterInput = document.getElementById("newsletter");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitButton");

// Добавляем обработчики событий для элементов формы
nameInput.addEventListener("input", handleFormChange);
emailInput.addEventListener("input", handleFormChange);
ageInput.addEventListener("input", handleFormChange);
newsletterInput.addEventListener("change", handleFormChange);
passwordInput.addEventListener("input", handleFormChange);
confirmPasswordInput.addEventListener("input", handleFormChange);
myForm.addEventListener("submit", handleSubmit);

// Функция для обработки изменений в форме
function handleFormChange() {
  // Проверяем зависимости между элементами
  if (nameInput.value !== "" && emailInput.value !== "") {
    confirmPasswordInput.disabled = false;
  } else {
    confirmPasswordInput.disabled = true;
    confirmPasswordInput.value = "";
  }

  // Изменяем стиль submit-кнопки в зависимости от заполненности формы
  if (isFormValid()) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "green";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "lightgray";
  }
}

// Функция для проверки корректности заполнения формы
function isFormValid() {
  return (
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    ageInput.value !== "" &&
    passwordInput.value !== "" &&
    passwordInput.value === confirmPasswordInput.value
  );
}

// Функция для обработки отправки формы
function handleSubmit(event) {
  // event.preventDefault();

  // Проверяем, если форма заполнена корректно, выводим данные в консоль
  if (isFormValid()) {
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      age: ageInput.value,
      newsletter: newsletterInput.checked,
      password: passwordInput.value,
    };
    console.log(formData);
    setTimeout(function() {
      window.location.href = "index.html";
    }, 3000);
  } else {
    console.log("Форма заполнена некорректно.");
  }
}
