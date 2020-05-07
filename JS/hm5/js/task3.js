"use strict";
function home3() {
  class Storage {
    constructor(arr) {
      this.arr=arr;
    }
    getItems(){
      
      return this.arr;
    }
    addItem(item){
  this.arr.push(item);
  console.table(this.arr);
    }
    removeItem(item){
      const findElem=this.arr.indexOf(item)
      if(findElem>-1){
        this.arr.splice(findElem, 1);
      }
      console.table(this.arr);
    }
  }
  const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  // console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  // console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}
