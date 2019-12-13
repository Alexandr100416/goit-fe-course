"use strict";
function home4() {
  class StringBuilder {
    constructor(str) {
      this._value = str;
    }
    get value() {
      return this._value;
    }
    set value(str){
        this._value=str;
    }
    append(str) {
      return this.value=this.value+str;
    }
    prepend(str) {
      return this.value = str + this.value;
    }
    pad(str) {
      this.prepend(str);
      this.append(str);
      return this.value;
    }
  }

  const builder = new StringBuilder(".");

  builder.append("^");
  console.log(builder.value); // '.^'

  builder.prepend("^");
  console.log(builder.value); // '^.^'

  builder.pad("=");
  console.log(builder.value); // '=^.^='
}
