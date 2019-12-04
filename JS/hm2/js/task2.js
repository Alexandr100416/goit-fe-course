"use strict";
function home2() {
  let pricePerWord = 10;
  const message = prompt("Прохання ввести потрібний текст для гравіювання!");
  const words = message.split(" ");
  let priceOnerWord = words.length * pricePerWord + " грн";
  alert(priceOnerWord);
}
