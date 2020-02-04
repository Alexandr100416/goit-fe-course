"use strict";
function home1() {
  const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
  const secondUser = {
    mood: "happy",
    hobby: "skydiving",
    premium: false
  };
  
  const newElem = {
    ...user,
    ...secondUser
  };
  const finalArr = Object.keys(newElem);
  for (let key of finalArr) {
    const a = key;
    const b = newElem[key];
    console.log(`${a} : ${b}`);
  }
}
