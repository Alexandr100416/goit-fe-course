import users from "./users.js";
"use strict";


// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {return users.reduce((totalBalance,user)=>{totalBalance+=user.balance;},0)
};

console.log(calculateTotalBalance(users)); 
