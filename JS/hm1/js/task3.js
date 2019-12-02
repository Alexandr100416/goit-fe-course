"use strict";

function home3() {
  const ADMIN_PASSWORD = "qwerty";
  let maseeage = prompt("Введите пароль");
  if (maseeage === null) {
    alert("Отменено пользователем");
  } else if (maseeage === ADMIN_PASSWORD) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен, неверный пароль!");
  }
  alert(maseeage);
}
