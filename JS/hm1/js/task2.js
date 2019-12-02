"use strict";

function home2() {
  const total = 100;
  const ordered = 50;
  let maseeage = prompt("Введите количество товара");
  if (maseeage <= total || total <= ordered ) {
    alert("Заказ оформлен, с вами свяжется менеджер!");
  } else {
    alert("На складе недостаточно твоаров!");
  }
}
