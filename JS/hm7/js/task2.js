const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const list = document.querySelector('ingredients');
  const addFragment = document.createDocumentFragment();
  ingredients.forEach((ingredient)=>{
    const newLi = document.createElement('li');
    newLi.textContent = ingredient;
    addFragment.appendChild(newLi);
  });
  
  list.appendChild(addFragment);

