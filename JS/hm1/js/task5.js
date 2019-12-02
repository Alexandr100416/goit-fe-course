"use strict";

function home5() {
  let China = 100;
  let Chile = 250;
  let Australia = 170;
  let India = 80;
  let Jamaica = 120;
  let maseeage = prompt("Укажите страну для доставки");
  alert(maseeage.toLowerCase());
  switch (maseeage.toLowerCase()) {
    case "china":
      alert("Доставка в China  будет стоить 100 кредитов");
      break;
    case "chile":
      alert("Доставка в Chile  будет стоить 250 кредитов");
      break;
    case "australia":
      alert("Доставка в Australia  будет стоить 170 кредитов");
      break;
    case "india":
      alert("Доставка в India  будет стоить 80 кредитов");
      break;
    case "jamaica":
      alert("Доставка в Jamaica  будет стоить 120 кредитов");
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
