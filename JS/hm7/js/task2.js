const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const products = document.getElementById("ingredients");
// const item=document.createElement("li");
// item.innerHTML="Картошка";
// products.appendChild(item);

const summ = ingredients.reduce(
  (acc, value) => (acc += `<li>${value}</li>`),
  ""
);

products.insertAdjacentHTML("afterbegin", summ);

console.log(summ);
