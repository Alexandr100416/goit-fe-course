"use strict";
function home5() {
class Car {
        /*
         * Добавь статический метод `getSpecs(car)`,
         * который принимает объект-машину как параметр и выводит
         * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
         */
      
        /*
         * Конструктор получает объект настроек.
         *
         * Добавь свойства будущеего экземпляра класса:
         *  speed - текущая скорость, изначально 0
         *  price - цена автомобиля
         *  maxSpeed - максимальная скорость
         *  isOn - заведен ли автомобиль, значения true или false. Изначально false
         *  distance - общий киллометраж, изначально 0
         */
        constructor({speed,price,maxSpeed,isOn, distance = false, distance = 0}) {
            this.speed=speed;  
            this._price=price;
            this.maxSpeed=maxSpeed;
            this.isOn=isOn;
            this.distance=distance;
        }
        static getSpecs(car) {
          console.log (car.maxSpeed, car.speed, car.isOn, car.distance,car.price);
        }
        /*
         * Добавь геттер и сеттер для свойства price,
         * который будет работать с свойством цены автомобиля.
         */
      get price(){
          return this._price;
      }
      set price (){
          this._price=val;
      }
        /*
         * Добавь код для того чтобы завести автомобиль
         * Записывает в свойство isOn значение true
         */
        turnOn() {
            this.isOn=true;
            
        }
      
        /*
         * Добавь код для того чтобы заглушить автомобиль
         * Записывает в свойство isOn значение false,
         * и сбрасывает текущую скорость в 0
         */
        turnOff() {
            this.isOn=false;
            this.speed=0;
        }
      
        /*
         * Добавялет к свойству speed полученное значение,
         * при условии что результирующая скорость
         * не больше чем значение свойства maxSpeed
         */
        accelerate(value) {
            this.speed+=this.speed+value<=this.maxSpeed?value:this.maxSpeed-this.speed;
        }
      
        /*
         * Отнимает от свойства speed полученное значение,
         * при условии что результирующая скорость не меньше нуля
         */
        decelerate(value) {
            this.speed-=this.speed-value>=0?value:this.speed;
        }
      
        /*
         * Добавляет в поле distance киллометраж (hours * speed),
         * но только в том случае если машина заведена!
         */
        drive(hours) {
            this.distance+=hours*this.speed;
        }
      }
    Car.color={GREEN:"GREEN", RED:"RED"}
      const mustang = new Car({ maxSpeed: 200, price: 2000 });
      mustang.color=Car.colors.RED;
      mustang.turnOn();
      mustang.accelerate(50);
      mustang.drive(2);
      
      Car.getSpecs(mustang);
      // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
      
      mustang.decelerate(20);
      mustang.drive(1);
      mustang.turnOff();
      
      Car.getSpecs(mustang);
      // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
      
      console.log(mustang.price); // 2000
      mustang.price = 4000;
      console.log(mustang.price); // 4000

}