"use strict";
function home3() {
  let findBestEmployee = function(employees) {
    let a = 0;
    let b;
    for (let key in employees) {
      if (employees[key] > a) { 
        a = employees[key];
        b = key;
      }
    }
    console.log(`${b} - ${a}`);
  };

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99
    })
  ); // lorence
}
