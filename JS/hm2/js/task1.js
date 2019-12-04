"use strict";
function home1() {
  
const logItems = (arr) => {
    for (let arrItem of arr) {
let indexArr = arr.indexOf (arrItem)+1;
console.log (`${indexArr}- ${arrItem}`);
}
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
}