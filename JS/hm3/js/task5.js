"use strict";
function home5() {
  const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 }
  ];

  const getAllPropValues = (arr, prop) => {
    let keysArray = [];
    for (const item of arr) {
      if (item[prop] !== undefined) {
        keysArray.push(item[prop]);
      }
    }
    return keysArray;

    // =====================Або=============

    // const arrPush = [];
    // for (let key of arr) {
    //   if (prop in key) {
    //     arrPush.push(key[prop]);
    //   }
    // }
    // return arrPush;
    // ========================================
  };
  console.log(getAllPropValues(products, "name"));
  console.log(getAllPropValues(products, "quantity"));
  console.log(getAllPropValues(products, "category"));
}
