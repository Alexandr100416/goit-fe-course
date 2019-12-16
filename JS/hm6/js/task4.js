import users from "./users.js";
"use strict";

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(user=>!user.isActive)
};

console.log(getInactiveUsers(users));
