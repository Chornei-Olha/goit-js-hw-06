// Напиши скрипт управления формой логина.
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в объект, где имя поля будет
// именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи объект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (this.email.value === "" || this.password.value === "") {
    return console.log("Please enter your Email address or Password");
  }
  const formRev = `email: ${this.email.value}, Password: ${this.password.value}`;
  console.log(formRev);
  event.currentTarget.reset();
}
