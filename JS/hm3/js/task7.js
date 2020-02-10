"use strict";
function home7() {
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
// История транзакций
  transactions: [],
/*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    do {
      type = prompt("Прохання вказати потрібну операцію");
      if (type === Transaction.DEPOSIT) {
        account.deposit(amount);
      } else if (type === Transaction.WITHDRAW) {
        account.withdraw(amount);
      } else if (type === "balance") {
        account.getBalance();
      } else if (type === "history") {
        account.getTransactionDetails();
      } else if (
        type !== Transaction.DEPOSIT ||
        type !== Transaction.WITHDRAW
      ) {
        alert("Операцію перервано!");
      }
    } while (type !== null);
    alert(`Історія виконаних операцій : ${account.transactions} грн.
    Баланс на рахунку : ${account.balance} грн.`);
  },
/*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    amount = prompt("Введите суму");
    let transformationNumber = Number(amount);
    if (!isNaN(transformationNumber)) {
      account.balance += transformationNumber;
      account.transactions.push(
        `Поповнення коштів(+) ${transformationNumber} грн.`
      );
      alert(`Ви добавили на рахунок : ${transformationNumber} грн.
      Баланс на рахунку : ${account.balance} грн.`);
    } else {
      alert("Не коректно вказано суму. Прохання повторити спробу.");
    }
  },
/*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    amount = prompt("Введите суму");
    let transformationNumber = Number(amount);
    if (!isNaN(transformationNumber)) {
      account.balance -= transformationNumber;
      account.transactions.push(
        `Зняття коштів(-) ${transformationNumber} грн.`
      );
      alert(`Ви зняли з рахунка : ${transformationNumber} грн.
      Баланс на рахунку : ${account.balance} грн.`);
    } else {
      alert("Не коректно вказано суму. Прохання повторити спробу.");
    }
  },
/*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    alert(`Текущий баланс : ${account.balance}`);
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    id = prompt("Введите номер операции");
    let idNum = Number(id);

    for (let i = 0; i < account.transactions.length; i += 1) {
      if (!isNaN(idNum)) {
        i = idNum;
        alert(account.transactions[i]);
        break;
      }else if (isNaN(idNum))
      {alert(`Історія виконаних операцій : ${account.transactions} грн.`)
      break;}
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    

  }
};
account.createTransaction();
}