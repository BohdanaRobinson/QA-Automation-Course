let carBrands = ["Bmw", "Nissan", "Mercedez", "Toyota"];
let numbers = [4, 55, 85, 25];
let sentence = "It's so cool and convenient to own a car";
let price = 9.99;

// ## PART 1: STRING + FUNCTIONS

// ### 🔤 Task 1: Clean & Format Text
// Write a function that:

// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function firstTasks(str) {
  let noSpaces = str.trim();
  let lowerCase = noSpaces.toLowerCase();
  return lowerCase;
}
console.log(firstTasks("  It's so cool and convenient to own a car  ")); // it's so cool and convenient to own a car

// ### 🔤 Task 2: First & Last Character

// Write a function that:

// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character

function secondTask(str2) {
  const first = str2[0];
  const second = str2.at(-1);
  return { first, second };
}
console.log(secondTask("It's so cool and convenient to own a car"));
