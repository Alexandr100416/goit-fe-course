let counterValue = 0;
function increment() {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}
