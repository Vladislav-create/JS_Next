// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl = document.querySelector("#from");
const spanEl = document.querySelector("span");

const writeHeader = () => {
  spanEl.textContent = inputEl.value;
};

inputEl.addEventListener("input", writeHeader);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector(".messageBtn");
const msgEl = document.querySelector(".message");

btnEl.addEventListener("click", function (e) {
  msgEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  msgEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector("form");
const inputElts = document.querySelectorAll(".form-control");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  inputElts.forEach((element) => {
    if (element.value === null || element.value === "") {
      element.style.border = "3px solid red";
      element.classList.add("error");
    } else if (element.value !== null || element.value !== "") {
      element.style.border = "1px solid green";
      element.classList.remove("error");
    }
  });
});

console.log(inputElts);
