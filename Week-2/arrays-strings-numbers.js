let carBrand = ["BMW", "Mercedes-Benz", "Porshe", "Toyota", "Dodge"];
let lucckyNumbers = [1, 23, 3, 49, 11, 28];
let newString = "       Good Boy     ";
let successRate = 99.9;

// Part1
//1.
console.log(carBrand[0]); //Log the first car brand
console.log(carBrand.at(4)); // 2. Log the last car brand using a method
console.log(carBrand.length); // Log how many car brands are in the array

//Task 2: Updating Elements
carBrand[1] = "Lexus";
console.log(carBrand);

carBrand[4] = "Nissan";
console.log(carBrand);

//Task 3: Mutator Methods
carBrand.push("Tesla"); //Add a new car brand to the end
console.log(carBrand);

carBrand.pop(); //Remove the last car brand
console.log(carBrand);

carBrand.unshift("Volvo"); // Add a new car brand to the beginning
console.log(carBrand);

carBrand.shift(); //Remove the first car brand
console.log(carBrand);

carBrand.reverse(); //Reverse the array
console.log(carBrand);

carBrand.sort(); //Sort the array alphabetically

console.log(carBrand);

// Task 4: Finder Methods
//let carBrand = ["BMW", "Mercedes-Benz", "Porshe", "Toyota", "Dodge"];

const toyotaThere = carBrand.includes("Toyota"); ///Check if "Toyota" exists in the array
console.log(toyotaThere);

const bmwIndex = carBrand.indexOf("BMW");
console.log(bmwIndex); // Find the index of "BMW"

const lastIndexCar = carBrand.lastIndexOf("Dodge"); //?// Find the last index of a car brand that appears more than once ?
console.log(lastIndexCar);

//Task 5: Joiners
const carBrandString = carBrand.join(","); // Convert the car brands array into a single string
console.log(carBrandString);

console.log(Array.isArray("car brands")); //Check if the car brands variable is an array: false

const newWord = "ENGINE"; // Convert the word "ENGINE" into an array of characters
const newArray = Array.from(newWord);
console.log(newArray);

/// PART 2: STRING MANIPULATION
//let newString = "       Good Boy     ";
console.log(newString.trim()); //Remove extra spaces from the string

console.log(newString.length); //Log its length

// Task 7: Case & Access
console.log(newString.toUpperCase()); //Convert the string to uppercase
console.log(newString.toLowerCase()); // Convert the string to lowercase

// Task 8: Slice & Replace

const word = "TestCase";
console.log(word.slice(0, 4)); //1. Extract the **first word**
console.log(word.slice(4)); //2. Extract the **last word**

let mydog = "Jaycee is a good boy";
console.log(mydog.replace("good", "bad")); //Replace one word with another

// Task 9: Search Methods
console.log(mydog.includes("car")); // Check if the string includes "car". // false
console.log(mydog.indexOf("boy")); //Find the position of a word

console.log(mydog.startsWith("Jaycee")); //Check if the string starts with a specific word //true
console.log(mydog.endsWith("bad")); //Check if the string ends with a specific word // false

//  Task 10: Split & Concat

let myBoy = "Lazy, playful, always hungry, energizer"; // Split the sentence into words
console.log(myBoy.split(","));
let personality = "stuborn";

console.log(myBoy.concat(" ", personality)); //Join two strings using a method (not +)

// ✍ Task 11: Template Literals

let carBrandNew = "BMW";
const carYear = 2010;
let carAge = 16;
let sentence = ` I use to have a car of a brand ${carBrandNew}, that car was from ${carYear}, and right now it would be ${carAge} year old car`;

console.log(sentence);
