// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Построение DOM-дерева завершено.");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = () => {
  console.log("page is fully loaded");
};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
//  у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
//  которому был совершен клик.
// - Необходимо использовать делегирование.

const allTagsInBody = document.querySelectorAll("body *");

const getInfo = (event) => {
    if (event.target.className == "super_element") {
        console.log(`Класс "super_element" присутствует в элементе ${event.target.tagName}`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе ${event.target.tagName}`);
    }
};

allTagsInBody.forEach((element) => {
  element.addEventListener("click", getInfo);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textareaEl = document.querySelector("textarea");

const mousInfo = () => {
  console.log("Вы навели мышь на textarea");
};

textareaEl.addEventListener("mouseover", mousInfo);

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector("ul");

const getInfoButton = (event) => {
  console.log(event.target.textContent);
};

ulEl.addEventListener("click", getInfoButton);

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// У меня выводится попорядку. Сначала инфа по 3-му заданию и уже потом по 5-му.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liEl = document.querySelectorAll('li');

for (let i = 0; i < liEl.length; i++) {

    if (i % 2 != 0) {
        console.log(liEl[i].textContent);
        liEl[i].style.backgroundColor = 'red'
    }
    
}

