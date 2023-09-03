// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const aElem = document.querySelectorAll(".dropdown-item");
console.log(aElem);
aElem.forEach((element) => {
  element.classList = "dropdown-item super-dropdown";
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnElem = document.querySelector(".btn");
btnElem.classList.toggle("btn-secondary");
console.log(btnElem);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuElem = document.querySelector(".dropdown-menu");

menuElem.classList.forEach((elem) => {
  if (elem === "menu") {
    menuElem.classList.toggle("dropdown-menu");
  }
});

console.log(menuElem);

// Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divElem = document.querySelector("div", ".dropdown");

divElem.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const idElem = document.querySelector("#dropdownMenuButton");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const dataElem = document.querySelector(
  "[aria-labelledby='dropdownMenuButton']"
);
dataElem.setAttribute("data-dd", "3");
console.log(dataElem);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const typeElem = document.querySelector(".dropdown-toggle");
typeElem.removeAttribute("type");
console.log(typeElem);
