"use strict";

function home4()
{
    let credits = 23580;
    let pricePerDroid = 3000;
    let maseeage = prompt ("Какое количество дроидов нужно купить");
    let totalPrice = pricePerDroid * maseeage;
    if (maseeage === null) {
        alert ("Отменено пользователем!");
    } else if (totalPrice > credits) {
        alert ("Недостаточно средств на счету!")
    } else if (totalPrice <= credits) {
        alert (`Вы купили ${maseeage} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
    }
    else {alert (totalPrice)};
    
}
