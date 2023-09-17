import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(
  ({
    conditions,
    date_end,
    date_start,
    id,
    image,
    is_main,
    offers,
    target_regions,
  }) => {
    const contentEl = document.querySelector(".content");
    const cartEl = document.createElement("div");
    cartEl.classList.add("cart");

    const imgEl = document.createElement("img");
    imgEl.classList.add("cart__img");
    imgEl.src = image;

    const titleEl = document.createElement("h5");
    titleEl.textContent = conditions;
    titleEl.classList.add("cart__title");

    const infoDateElStart = document.createElement("p");
    infoDateElStart.textContent = date_start;
    infoDateElStart.classList.add("cart__date-start");

    const infoDateElEnd = document.createElement("p");
    infoDateElEnd.textContent = date_end;
    infoDateElEnd.classList.add("cart__date-end");

    const idEl = document.createElement("p");
    idEl.textContent = `id предложения: ${id}`;
    idEl.classList.add("cart__id");

    cartEl.appendChild(imgEl);
    cartEl.appendChild(titleEl);
    cartEl.appendChild(infoDateElStart);
    cartEl.appendChild(infoDateElEnd);
    cartEl.appendChild(idEl);

    contentEl.appendChild(cartEl);
  }
);
