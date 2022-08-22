// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");
console.log(textInput);
textInput.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const inp = event.currentTarget;
  const inpLength = Number(inp.dataset.length);
  if (inp.value.length === inpLength) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  }
}
