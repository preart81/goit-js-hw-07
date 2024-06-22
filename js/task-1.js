/* 
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів
li.item. 

2. Для кожного елемента li.item у списку ul#categories знайде й виведе в
консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії
(усіх <li>, вкладених у нього). 
*/

const categiesList = document.querySelector("#categories");
const itemsH2List = categiesList.querySelectorAll("li.item h2");

console.log(`Number of categories: ${categiesList.children.length}`);

itemsH2List.forEach((item) => {
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${item.nextElementSibling.children.length}`);
});
