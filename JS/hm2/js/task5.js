"use strict";
function home5() {
  const checkForSpam = function(str) {
    // let arrStr = str.split(" ");
    // for (let i = 0; i < arrStr.length; i += 1) {
    //   let word = arrStr[i].toLowerCase();
    //   if (word === "spam" || word === "sale") {
    //     return true;
    //   }
      
    // }
    // return false;
    return str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");
  };
  console.log(checkForSpam("Latest technology news")); // false

  console.log(checkForSpam("JavaScript weekly newsletter")); // false

  console.log(checkForSpam("Get best sale offers now!")); // true

  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
}
