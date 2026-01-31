const fruits = ["banana", "watermelon", "kiwi", "apple"];

// ### Task 1: Print All Elements

// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints each element

function printFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits:", fruits[i]);
  }
}
printFruits(fruits);

// ### 🔁 Task 2: Index + Value
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints both the **index** and **value** of each element

function printFruitsWithIndex(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]} at Index ${i}`);
  }
}
printFruitsWithIndex(fruits);

// ### 🔁 Task 3: First and Last
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints:
//     - The first element
//     - The last element (using `array[array.length - 1]`)

function taskThree(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[0]);
    console.log(fruits[fruits.length - 1]);
    break;
  }
}
taskThree(fruits);
