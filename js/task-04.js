// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrBtnEl = document.querySelector('button[data-action="decrement"]');
const incrBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

const decrClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const incrClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrBtnEl.addEventListener("click", decrClick);
incrBtnEl.addEventListener("click", incrClick);
