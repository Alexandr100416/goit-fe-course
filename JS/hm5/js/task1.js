"use strict";
function home1() {
  const Account = function ({ login = "qwerty", email = "qwerty" }) {
    this.login = login;
    this.email = email;
  };

  Account.prototype.getInfo = function () {
    console.log(`login: ${this.login}, Email: ${this.email}`);
  };

  console.log(Account.prototype.getInfo); // function

  const mango = new Account({
    login: "Mangozedog",
    email: "mango@dog.woof",
  });
  const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
  });
  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

// =========================OR============================================================
// class Account {
//   constructor(elements) {
//     this.login = elements.login;
//     this.email = elements.email;
//   }
//   getInfo() {
//     console.log(`LOGIN: ${this.login}; EMAIL: ${this.email}`);
//   }
// }


// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// ====================OR==================================================================