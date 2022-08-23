// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
button.addEventListener("click", onClickButton);
function onClickButton() {
  span.textContent = getRandomHexColor();
  document.body.setAttribute("style", "background-color: " + span.textContent);
}
