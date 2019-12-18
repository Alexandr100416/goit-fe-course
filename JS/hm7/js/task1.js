const item = document.getElementById("categories");

console.log(`В списке ${item.children.length} категории.`);

for (let i = 0; i < item.children.length; i++) {
  console.log(
    `Категория: ${item.children[i].firstElementChild.innerHTML}\nКоличество элементов: ${item.children[i].lastElementChild.children.length}`
  );
}
