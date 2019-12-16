import users from "./users.js";

"use strict";


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  return users.sort((userA,userB )=>{return userA.friends.length-userB.friends.length}).map((user)=>{return user.name});};

console.log(getNamesSortedByFriendsCount(users));

