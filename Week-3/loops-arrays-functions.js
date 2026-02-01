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
    console.log(fruits[0]); //first element
    console.log(fruits[fruits.length - 1]); //last
    break;
  }
}
taskThree(fruits);

// ### Task 4: Loop Through a String
// **Use a `while` loop**
// Write a function that:
// 1. Takes a **string**
// 2. Uses a `while` loop
// 3. Prints **each character** one by one

const str = "SDLC";

function taskFourth(str) {
  let i = 0;
  while (i < str.length) {
    console.log("Character:", str[i]);
    i++;
  }
}
taskFourth(str);

// ### Task 5: Stop When Found
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array and a value to search for
// 2. Loops through the array using a `for` loop
// 3. Stops the loop when the value is found

function taskFifth(fruits, searchFruit) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === searchFruit) {
      console.log(`Value was found: ${fruits[i]}`);
      break;
    }
  }
}
taskFifth(fruits, "watermelon");

// ### Task 6: Print Values
// **Use a `for...of` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints each value

function taskSixth(fruits) {
  for (const types of fruits) {
    console.log(fruits);
  }
}
taskSixth(fruits);

// ### Task 7: Skip a Value
// **Use a `for...of` loop**
// Write a function that:
// 1. Takes an array and a value to skip
// 2. Prints all values except the skipped one
function taskSeventh(fruits, skippedFruit) {
  for (const type of fruits) {
    if (type === skippedFruit) {
      continue;
    }
    console.log(type);
  }
}
taskSeventh(fruits, "apple");

// ### Task 8: Uppercase Strings
// **Use both `for` and `for...of` loops. Write two separate functions for different loop types.**
// Write a function that:
// 1. Takes an array of strings
// 2. Returns a **new array** with all strings converted to **uppercase**
// 📌 Do NOT modify the original array

// function

function taskEighth(fruits) {
  let newArray = [];

  for (const fruit of fruits) {
    newArray.push(fruit.toUpperCase());
  }
  return newArray;
}
console.log(taskEighth(fruits));
//or

function taskEighth(fruits) {
  let newArray = [];
  for (let i = 0; i < fruits.length; i++)
    newArray.push(fruits[i].toUpperCase());
  return newArray;
}

console.log(taskEighth(fruits));

// ### ask 9: Reverse Order (Challenge)
// **It’s okay if you are not able to do but please try.**
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints elements from **last to first**
// 📌 Do NOT use `.reverse()`

function taskNineth(fruits) {
  for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
  }
}
taskNineth(fruits);

// ### Task 10: Length Checker
// **Use ANY loop**
// Write a function that:
// 1. Takes an array of strings
// 2. Prints only strings longer than **4 characters**
// 📌 Use `.length` on strings only

function taskTenth(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 4) {
      console.log(fruits[i]);
    }
  }
}
taskTenth(fruits);
