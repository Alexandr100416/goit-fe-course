import users from "./users.js";
export function home2() {
  // // Задание 2
  // // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

  const getUsersWithEyeColor = (users, color) =>
    users.filter(user => user.eyeColor === color);

  console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
}
