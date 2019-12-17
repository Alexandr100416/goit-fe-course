
import users from "./users.js";
export function home7() {
  // // // Задание 7
  // // // Получить общую сумму баланса (поле balance) всех пользователей.

  const calculateTotalBalance = users =>
    users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

  console.log(calculateTotalBalance(users)); // 20916
}
