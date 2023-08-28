// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const el = document.getElementById("super_link");
console.log(el);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const elements = document.querySelectorAll(".card-link");
elements.forEach((element) => {
  element.textContent = "ссылка";
});

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const elemCardBody = document.querySelectorAll(".card-body .card-link");
console.log(elemCardBody);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const atr = document.querySelector('[data-number = "50"]');
console.log(atr);

//5. Выведите содержимое тега title в консоль.
const title = document.querySelector("title");
console.log(title.textContent);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentElement);

//7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const p = document.createElement("p");
p.textContent = "Привет";
const card = document.querySelector(".card");
card.insertBefore(p, card.firstChild);
console.log(card);

//8. Удалите тег h6 на странице.
const elH6 = document.querySelector("h6");
elH6.parentElement.removeChild(elH6);
