// const title = document.querySelector(".title");
// console.log(title);

// const link = document.querySelector(".link");
// console.log(link);
// link.textContent = "другая ссылка";
// link.innerText = "еще другая ссылка";
// link.href = 'https://www.mozilla.org/ru/firefox/new/'
// link.setAttribute("href", "https://www.mozilla.org/ru/firefox/new/");

// const div = document.querySelector(".test");
// const p = document.createElement("p");
// p.textContent = "Любой новый добавленный текст из JS";
// div.appendChild(p);
// console.log(div);
// console.log(p);

// const btn = document.createElement("button");
// btn.textContent = "Отправить";
// div.appendChild(btn);

// let count = 1;

// btn.onclick = function () {
//     console.log(count++);
// }

// btn.onclick = function () {
//     btn.textContent = 'Отправлено'
//     setTimeout(() => {
//         btn.textContent = 'Отправить'
//     }, 1000);
// }

// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const divBlock = document.querySelector(".block");
// const divItem = document.createElement("div");
// divItem.setAttribute("class", "item");

// divItem.textContent = "Элемент внутри";

// divBlock.appendChild(divItem);

// divItem.setAttribute("class", "item item_1");

// console.log(divItem.style);

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const pText = document.querySelector(".text");
// console.log(pText);
// console.log(pText.previousElementSibling);
// console.log(pText.parentElement);
// console.log(pText.parentElement.parentElement);

// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const h2Elem = document.querySelector("h2");
// const body = document.querySelector("body")

// const parents = [];

// let parent = h2Elem.parentNode;

// while (parent !== body) {
//   parents.push(parent);
//   parent = parent.parentNode;
// }

// console.log(parents);

// const input = document.querySelector("input");
// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// input.addEventListener('input', (event) => {
//   value = event.target.value;
//   console.log(value);
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault;
//   const message = document.createElement("h2");

//   if (input.value === "") {
//     message.textContent = "Вы не заполнили поле!!!";
//     message.style.border = "2px solid red";
//   } else {
//     message.textContent = "Вы заполнили поле!!!";
//     message.style.border = "2px solid gray";
//   }
//   form.appendChild(message);
//   setTimeout(() => {
//     message.remove();
//   }, 1000);
// });

// const buttonEls = document.querySelectorAll("button");

// console.log(buttonEls);

// buttonEls.forEach((element) => {
//   element.onclick = function (params) {
//     console.log(`Нажал кнопку ${element.textContent}`);
//   };
// });

document.querySelector(".btn5").addEventListener("click", function () {
  this.textContent = "JS поменял текст";
});
