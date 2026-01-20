// 1.
// "Hello World" -string;
//  42 - Number;
//  null - null;
//  undefined - undefined;
//  [1, 2, 3] - array;
//  { name: "Alex, age: 20";} Object;

//  2.
let myFavoriteMovie = "Taken"; // string - My favorite movie

let myAge = 26; // number

let isJavaScript4Me = true; // boolean

let ufcChampion; // undefined value;
console.log("who is UFC Champion?", ufcChampion);

ufcChampion = "Alex Pereira";
console.log("who is UFC Champion?", ufcChampion);

let dogBreed = null; // null value;
console.log("Dog Breed?", dogBreed);

dogBreed = "Boxer";
console.log("Dog Breed?", dogBreed);

//  3.
let a = "JS"; // Primitive
let b = [10, 20]; //Non-primitive
let c = 100; // primitive
let d = { city: "Paris" }; // Non-primitive

// Arays and Objects are called non-primitive, because they can store multiple values;

//4.
// value of x = "Hello".
//In this example , it's a primitive behavior. Because "x" and "y" are different variables, and each variable has its own assigned value.
// And "y = "Hi" --> we just reassign value.

// 5. Arrays
const myFavoriteUfCfighters = [
  "Charles Olieviera",
  "Nate Diaz",
  "Dustin Porier",
  "Chama",
  "Tony Ferguson",
];
console.log("My favorite UFC Fighters:", myFavoriteUfCfighters);

const myLuckyNumbers = [2, 23, 11, 28, 67];
console.log("My lucky Numbers:", myLuckyNumbers);

const neighbor = ["Dana White", 48, "UFC president", "Las Vegas", true];
console.log("My neighbor:", neighbor);

// 6. Object

let ufcFighter5 = {
  name: "Alex Pereira",
  age: 38,
  fightingDivisions: ["middleweight", "light heavyweight", "Heavyweight"],
  isFormerKickboxer: true,
  country: {
    countryName: "Brazil",
    city: "Sao Bernado do Campo",
  },
};
console.log(ufcFighter5);
console.log(ufcFighter5.country);

let dog = {
  dogName: "Jaycee",
  dogBreed: "Boxer",
  age: 2,
  isBoy: true,
  personality: ["playful", "stuborn", "Jumper", "Clown"],
};
console.log("My dog", dog);

let stock = {
  ticker: "AAPL",
  price: 100,
  exchange: "NYSE",
  type: "Common",
  latestPrice: [150, 151, 151.5, 149, 100],
};
console.log("Characteristics of stock", stock);

//7. IF statement

let number = 5;
if (5 > -1) {
  console.log("Positive number");
}
console.log(number);

//8. If else

let isSnowing = true;
if (isSnowing) {
  console.log("Stay home, don't take your dog for a walk");
} else {
  console.log("Take your dog for a walk");
}
console.log(" Is it Snowing?", isSnowing);

isSnowing = false;
if (isSnowing) {
  console.log("Stay home, don't take your dog for a walk");
} else {
  console.log("Take your dog for a walk");
}
console.log("Is it Snowing?", isSnowing);

// 9. Else if
let studentsScore = 95;
if (studentsScore > 90) {
  console.log("Grade A");
} else if (studentsScore > 80) {
  console.log("Grade B");
} else if (studentsScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
console.log(studentsScore);

//10. Switch statement

let releaseDay = "Saturday";
switch (releaseDay) {
  case "Monday":
    console.log("It's Monday, not a release day");
  case "Thursday":
    console.log("It's Thursday, It's regression time");
  case "Saturday":
    console.log("It's time for release to be on call. Release day!");
    break;
  default:
    console.log("other day");
}

let ticketPrice = 500;
switch (ticketPrice) {
  case 600:
    console.log("The price is to high. I can't afford it");
    break;
  case 550:
    console.log("still too expensive");
    break;
  case 500:
    console.log("It's probably a moderate price");
    break;
  default:
    console.log("I won't buy at all!");
}

// 11.

let numberr = 5;
if (numberr < 0) {
  console.log("Negative number, we don't care");
} else if (numberr < 10) {
  console.log("Single digit number");
} else if (numberr <= 99) {
  console.log("Double digit number");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else",
  );
}
