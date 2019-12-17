"use strict"
import {home1} from "./task1.js";
import {home2} from "./task2.js";
import {home3} from "./task3.js";
import {home4} from "./task4.js";
import {home5} from "./task5.js";
import {home6} from "./task6.js";
import {home7} from "./task7.js";
import {home8} from "./task8.js";
import {home9} from "./task9.js";
import {home10} from "./task10.js";
      let maseeage = prompt("Какую таску запустить?", "task1");
      switch (maseeage) {
        case "task1":
          home1();
          break;
        case "task2":
          home2();
          break;
        case "task3":
          home3();
          break;
        case "task4":
          home4();
          break;
        case "task5":
          home5();
          break;
        case "task6":
          home6();
          break;
        case "task7":
          home7();
          break;
        case "task8":
          home8();
          break;
        case "task9":
          home9();
          break;
        case "task10":
          home10();
          break;
        default:
          alert("Старнное значение!!!");
      }