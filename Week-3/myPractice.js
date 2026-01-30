// Write a function that:
// Takes one number as input
// Increases that number by 10
//Returns the final value

function number(num) {
  let incresedNum = num + 10;
  return incresedNum;
}
console.log(number(10));

// Setup

// Create:

// An array of fruit names
// An array of numbers
// A short sentence about food
// A decimal number
let fruiuts = ["apple", "kiwi", "orange", "watermelon"];
let numbers = [2, 6, 8, 12];
let stringFood = " I Love Pizza";
let decNum = 2.99;

// 🔹 PART 1: STRING + FUNCTIONS
// 🍎 Task 1: Clean & Uppercase Text

// Write a function that:

// Takes a string
// Removes extra spaces at the start and end
// Converts the string to uppercase
// Returns the cleaned string
// 📌 No console.log inside the function.
function taskOne(str) {
  let noSpaces = str.trim();
  let upperCase = noSpaces.toUpperCase();
  return upperCase;
}
console.log(taskOne("     Jaycee is a good boy")); // JAYCEE IS A GOOD BOY

// Write a function that:
// Takes one number
// If the number is negative → return "Negative"
// If the number is zero → return "Zero"
// If the number is positive → return "Positive"
// 📌 Must use return in each case
// 📌 No console.log inside the function

function taskTwo(num) {
  if (num < 0) {
    return "Negative";
  } else if (num === 0) {
    return "Zero";
  } else if (num > 0) {
    return "Positive";
  }
}
console.log(taskTwo(10));
