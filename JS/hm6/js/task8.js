
import users from "./users.js";
export function home8() {
  // // Задание 8
  // // Массив имен всех пользователей у которых есть друг с указанным именем. friends: ['Sharron Pace'],

  const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));

  console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
}
