// Напиши скрипт, который для каждого элемента массива ingredients:
// 1. Создаст отдельный элемент <li>. Обязательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;

  return element;
});

console.log(ingredientsEl);
console.log(elements);
ingredientsEl.append(...elements);
