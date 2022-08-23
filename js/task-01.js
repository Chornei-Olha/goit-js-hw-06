// Напиши скрипт который:
// посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item;
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const listEl = document.querySelectorAll(".item");
console.log("Number of categories:", listEl.length);

listEl.forEach(function (categories) {
  console.log("Category:", categories.firstElementChild.textContent);
  console.log("Elements:", categories.lastElementChild.children.length);
});
