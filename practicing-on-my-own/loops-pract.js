//Practice 1 — for loop (arrays)

// You have an array of numbers.
// Loop through it
// Print only numbers greater than 10

let numbers = [3, 12, 5, 20, 8, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}

// What this does:
// i moves through indexes
// numbers[i] gets each value
// if filters values greater than 10
// console.log prints only those

//Practice 2 — for...of loop

// Loop through the array
// Print only numbers greater than 10
// Use for...of

for (let num of numbers) {
  if (num > 10) {
    console.log(num);
  }
}

//Mini-compare

// for → you control the index (i)
// for...of → you get the value directly (num)

// Practice 3 — while loop
// Same idea, different structure.
// Use a while loop
// Print numbers greater than 10

// let i = 0;

// while (i < numbers.length) {
//   if (numbers[i] > 10) {
//     console.log(numbers[i]);
//   }
//   i++;
// }

// Practice 4: for loop

// Task:
// Given an array of words, print each word that has more than 4 letters.

let array = ["apple", "bat", "orange", "fig", "grape"];
for (let i = 0; i < array.length; i++) {
  if (array[i].length > 4) {
    console.log(array[i]);
  }
}

// do the same task with a for...of loop — no index needed this time.
// Go ahead and write it using for...of.

for (let fruits of array) {
  if (fruits.length > 4) {
    console.log(fruits);
  }
}

// let’s do the same task with a while loop.

// Print words with more than 4 letters
// Use a while loop and a counter variable
let i = 0;
while (i < array.length) {
  // loop through all elements
  if (array[i].length > 4) {
    // check word length
    console.log(array[i]); // print only words longer than 4
  }
  i++; // move to next index
}

// 5. Create a function called printNumbers

// The function should:
// Use a for loop
// Print numbers from 1 to 5 (inclusive)
// Call the function

function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
printNumbers();

//  TASK 6. Write a function printFruits
// Use a for loop to print each fruit
let fruits = ["apple", "banana", "orange"];

function printFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}
printFruits(fruits);

// Task 7: Add a condition inside the loop

// Use the same fruits array
// Write a function printLongFruits
// Print only fruits with more than 5 characters
// Use a for loop + if condition

function printLongFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 5) {
      console.log(fruits[i]);
    }
  }
}
printLongFruits(fruits);

// Task 8: while loop practice
// Now let’s switch loop types 🔁
// Instructions:
// Write a function printNumbersWhile
// Use a while loop
// Print numbers from 1 to 5

function printNumbersWhile() {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}
printNumbersWhile();

// Task 9: Skip a value (continue)

// This one is important for interviews 👀

// Instructions:

// Write a function skipThree

// Use a for loop

// Print numbers from 1 to 5

// Skip number 3 using continue

function skipThree() {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // skip number 3
    }
    console.log(i); // print only numbers other than 3
  }
}

// Task 10: Count values and return a result

// Instructions:
// Write a function called countLongFruits
// It should:
// Take an array of fruits as input
// Use a loop to check each fruit
// Count how many fruits have more than 5 characters
// Return that number (do not print inside the loop)
let fruits1 = ["apple", "banana", "orange"];

function countLongFruits(fruits1) {
  let count = 0;
  for (let i = 0; i < fruits1.length; i++) {
    if (fruits1[1].length > 5) {
      count++;
    }
  }
  return count;
}

console.log(countLongFruits(fruits1));

// Task 11.
// Write a function called countEvenNumbers

// It should:

// Take an array of numbers

// Use a for loop

// Count how many numbers are even

// Return the count (do not print inside the loop)
let numbers2 = [2, 6, 10, 7, 9];
function countEvenNumbers(numbers2) {
  let count = 0; // start counting

  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
      // check if even
      count++; // add 1 to count
    }
  }

  return count; // return total **after the loop ends**
}
console.log(countEvenNumbers(numbers2));
