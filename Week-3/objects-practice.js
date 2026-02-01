// ### Task 1: Object Creation
// Create **one object** that represents something of your choice. (Examples: car, student, phone, video game, book, movie, etc.)
// Your object must include:
// - At least **4 properties**
// - At least **1 string**
// - At least **1 number**
// - At least **1 nested object**

const ufcFighter = {
  fighterName: "Charles Oliviera",
  age: 38,
  isUfcFighter: true,
  country: {
    countryName: "Brazil",
    city: "Sao Paulo",
    zipCode: 565656,
  },
};
console.log(ufcFighter);

// ### Task 2: Description Method
// Add a method that:
// 1. Uses `this`
// 2. Returns a sentence describing the object

ufcFighter.fighterInfoSentence = function () {
  console.log(
    `${this.fighterName} represents ${this.country.countryName} and he is one of the greatest in the UFC`,
  );
};

ufcFighter.fighterInfoSentence();

// ### Task 3. Update Method
// Add a method that:
// 1. Takes **parameters**
// 2. Updates one property using `this`
// 3. Returns the updated value

ufcFighter.updateAge = function (newAge) {
  //(new age) the parameter you pass when calling the method.
  // updateAge - a name of the method. (newAge) - paremetr the method takes
  this.age = newAge; //updates the age property inside the same object.
  return this.age;
};

console.log(ufcFighter.updateAge(39));

// ### ⚙ Task 4: Calculation Method
// Add a method that:
// 1. Uses `this`
// 2. Performs a calculation
// 3. Returns the result

const calculation = {
  add(price1, price2) {
    this.price1 = price1; //// temporarily store price1 in the object
    this.price2 = price2; ///// temporarily store price2 in the object
    const add = this.price1 + this.price2; //// calculate sum using 'this'
    return add;
  },
};
console.log(calculation.add(5, 10)); //15

// ### Task 5: Dot vs Bracket
// Access **two properties** using:
// - dot notation
// - bracket notation

console.log(ufcFighter.age);
console.log(ufcFighter.country["countryName"]);

// ### Task 6: Property Checker
// Write a function (outside the object) that:
// 1. Takes an object and a property name
// 2. Uses the `in` operator
// 3. Returns whether the property exists
function taskSixth(ufcFighter, age) {
  return age in ufcFighter;
}

console.log(taskSixth(ufcFighter, "age"));

// ### Task 7: Method Calls
// 1. Call **each object method**
// 2. Store the returned values
// 3. Print them to the console

ufcFighter.info = function () {
  ufcFighter.age = 26;
  return `${this.fighterName} is ${this.age} years old, and he is from ${this.countryName}.`;
};

console.log(ufcFighter.info());
