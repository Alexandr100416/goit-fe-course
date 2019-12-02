"use strict";

function home6() {
  let inputMessage;
  let total = 0;
  let numOfIteration = 0;

  do {
    inputMessage = prompt(`Введите число!`);
    if (inputMessage === null) {
      break;
    }
    if (!isNaN(Number(inputMessage))) {
      total += Number(inputMessage);
      numOfIteration++;
    } else {
      alert(Ошибка);
    }
  } while (true);
  //Когда нажал Cansel
  alert(
    `Cумма операций равна ${total}; Количество итераций ${numOfIteration}!`
  );
}
