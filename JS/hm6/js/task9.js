
import users from "./users.js";
export function home9() {
  // // Задание 9
  // // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

  const getNamesSortedByFriendsCount = users =>
    users
      .sort((userA, userB) => userA.friends.length - userB.friends.length)
      .map(user => user.name);

  console.log(getNamesSortedByFriendsCount(users));
  [
    "Moore Hensley",
    "Sharlene Bush",
    "Elma Head",
    "Carey Barr",
    "Blackburn Dotson",
    "Sheree Anthony",
    "Ross Vazquez"
  ];
}
