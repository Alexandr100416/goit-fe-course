"use strict";
function home7()
{
    const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
    let massege = prompt("Введите новый логин", ""); //запрос на ввод нового логина
    // ============================================
    const isLoginValid = function(login) {
      //проверка на количество символов
    
      if (login.length < 4 || login.length > 16) {
        alert("Ошибка! Логин должен быть от 4 до 16 символов");
    
        return false;
      }
      return true;
    };
    // isLoginValid(massege);
    // ================================================
    const isLoginUnique = function(allLogins, login) {
      if (allLogins.includes(login)) {
        alert("Такой логин уже используется!");
    
        return false;
      }
    
      return true;
    };
    // isLoginUnique(logins,massege);
    //
    // =====================================================
    const addLogin = function(login, LoginValid, LoginUnique) {
      if (LoginValid && LoginUnique) {
        alert("Логин успешно добавлен!");
    
        logins.push(login);
      }
    };
    addLogin(massege,isLoginValid(massege),isLoginUnique(logins,massege))
    console.log(logins);
     
}