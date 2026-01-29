let carBrands = ["Bmw", "Nissan", "Mercedez", "Toyota"];
let numbers = [4, 55, 85, 25];
let sentence = "It's so cool and convenient to own a car";
let price = 9.99;

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
console.log(secondTask("It's so cool and convenient to own a car")); //{ first: 'I', second: 'r' }
////////////////////////////////////////////////////////////
// ### 🔤 Task 3: Word Counter
// Write a function that:
// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words
// 📌 Use string and array methods only.

function thirdTask(sentence) {
  //let sentence = "It's so cool and convenient to own a car";
  let splitIntoWords = sentence.split(" ");
  let countOfWords = splitIntoWords.length;
  return countOfWords;
}
console.log(thirdTask(sentence)); //9
/////////////////////////////////////////

// ### 🚗 Task 4: Brand Checker
// Write a function that:
// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise
// 📌 Case-insensitive comparison required.

function taskFourth(carBrands) {
  // ["Bmw", "Nissan", "Mercedez", "Toyota"];
  let brandName = carBrands.includes("Nissan");
  if (brandName) {
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(taskFourth(carBrands)); //Brand exists

////////////////////////////////
// ### Task 5: Get Last Brand
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function taskFifth(carBrands) {
  //// ["Bmw", "Nissan", "Mercedez", "Toyota"];
  return carBrands[3];
}
console.log(taskFifth(carBrands)); // toyota

///////////////////////////////////////////////
// ### 🚗 Task 6: Format Brands List
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function tasksSixth(carBrands) {
  //["Bmw", "Nissan", "Mercedez", "Toyota"];
  return carBrands.join(", ");
}
console.log(tasksSixth(carBrands)); // Bmw,Nissan,Mercedez,Toyota

/////////////////////////////////////////////////////////

// ### Task 7: Safe Rounding
// Write a function that:
// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function taskSeventh(num) {
  if (isNaN(num)) {
    return "Invalid Number";
  } else {
    return Math.ceil(num);
  }
  return Math.ceil(num);
}

console.log(taskSeventh(8.4)); //9

///////////////////////////////////////
// ### ask 8: Price Comparison
// Write a function that:
// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

function tasksEighth(price1, price2) {
  if (price1 === price2) {
    return "Prices are equal";
  } else if (price1 > price2) {
    return "First is higher";
  } else if (price1 < price2) {
    return "Second is higher";
  }
}
console.log(tasksEighth(10, 12));
console.log(tasksEighth(10, 10));
console.log(tasksEighth(12, 10));

////////////////////////////////////////////////

//Task 9: Random Whole Number
// Write a function that:
// 1. Returns a random **whole number between 1 and 10**
// 2. Explain the formula in comments

function taskNinth(randomNum1, randomNum2) {
  return Math.floor(Math.random() * (randomNum1 - randomNum2 + 1)) + randomNum2;
}
console.log(taskNinth(10, 1)); // 2

////////////////////////////////////////
// ### 🧠 Task 10: Budget Check

// Write a function that:

// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`

function taskTenth(carPx, userBudget) {
  if (carPx <= 0 || userBudget <= 0) {
    return "Invalid input";
  } else if (carPx <= userBudget) {
    return "Within budget";
  } else {
    return "Over budget";
  }
}
console.log(taskTenth(9.0, 8.0));
