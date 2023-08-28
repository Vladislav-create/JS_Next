// const title = document.querySelector(".title");
// console.log(title);

const link = document.querySelector(".link");
console.log(link);
// link.textContent = "другая ссылка";
link.innerText = "еще другая ссылка";
// link.href = 'https://www.mozilla.org/ru/firefox/new/'
link.setAttribute("href", "https://www.mozilla.org/ru/firefox/new/");

const div = document.querySelector(".test");
const p = document.createElement("p");
p.textContent = "Любой новый добавленный текст из JS";
div.appendChild(p);
console.log(div);
console.log(p);

const btn = document.createElement("button");
btn.textContent = "Отправить";
div.appendChild(btn);

// let count = 1;

// btn.onclick = function () {
//     console.log(count++);
// }

btn.onclick = function () {
    btn.textContent = 'Отправлено'
    setTimeout(() => {
        btn.textContent = 'Отправить'
    }, 1000);
}