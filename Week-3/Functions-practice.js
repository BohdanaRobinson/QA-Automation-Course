let carBrands = ["Bmw", "Nissan", "Mercedez", "Toyota"];
//console.log(carBrands);
let numbers = [4, 55, 85, 25];
//console.log(numbers);
let sentence = "It's so cool and convenient to own a car";
//console.log(sentence);
let price = 9.99;
//console.log(price);

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
  return console.log(lowerCase);
}

firstTasks("  It's so cool and convenient to own a car  ");

// ### 🔤 Task 2: First & Last Character

// Write a function that:

// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character

function secondTask(str2) {
  const first = str2[0];
  const second = str2[str2.length - 1];
  return {
    first: console.log(first),
    second: console.log(second),
  };
}
secondTask("It's so cool and convenient to own a car");

// ### 🔤 Task 3: Word Counter

// Write a function that:

// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words

// 📌 Use string and array methods only.

function thirdTask(sentence) {
  let splitIntoWords = sentence.split(" ");
  let countOfWords = splitIntoWords.length;
  return console.log(countOfWords);
}

thirdTask("Jaycee is a good Boy");

//## PART 2: ARRAY + FUNCTIONS

// ### 🚗 Task 4: Brand Checker

// Write a function that:

// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise

// 📌 Case-insensitive comparison required.

function taskFourth(carBrandArray) {
  let brandName = carBrandArray.includes("Nissan");
  if (brandName) {
    return console.log("Brand exists");
  } else {
    console.log("Brand not found");
  }
}

taskFourth(["Bmw", "Nissan", "Mercedez", "Toyota"]);

// ### Task 5: Get Last Brand

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function taskFifth(carBrandsArray) {
  return console.log(carBrandsArray[3]);
}
taskFifth(["Bmw", "Nissan", "Mercedez", "Toyota"]);

// ### 🚗 Task 6: Format Brands List

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function tasksSixth(carBrandArray) {
  return console.log(carBrandArray.join(","));
}
tasksSixth(["Bmw", "Nissan", "Mercedez", "Toyota"]);

// ### Task 7: Safe Rounding

// Write a function that:

// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function taskSeventh(number) {
  if (isNaN(number)) {
    console.log("Invalid Number");
  } else {
    console.log(Math.ceil(number));
  }
  return console.log(Math.ceil(number));
}

taskSeventh(8.4);

// ### ask 8: Price Comparison

// Write a function that:

// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

function tasksEighth(price1, price2) {
  if (price1 === price2) {
    return console.log("Prices are equal");
  } else if (price1 > price2) {
    return console.log("First is higher");
  } else if (price1 < price2) {
    return console.log("Second is higher");
  }
}
tasksEighth(10, 12);
tasksEighth(10, 10);
tasksEighth(12, 10);
