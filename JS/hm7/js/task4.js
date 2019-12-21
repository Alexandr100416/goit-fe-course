let counterValue = 0;
const btnPlus = document.querySelector(`#counter button[data-action="increment"]`);
const btnMinus= document.querySelector(`#counter button[data-action="decrement"]`);
const resultSpan = document.querySelector(`#value`);
const reload = function(value) {
  resultSpan.innerHTML = value;
  console.log(value)
}
const increment=function (){
  counterValue ++;
  reload (counterValue);
}
const decrement=function (){
  counterValue --;
  reload (counterValue);
}
btnPlus.addEventListener("click",increment);
btnMinus.addEventListener("click",decrement);