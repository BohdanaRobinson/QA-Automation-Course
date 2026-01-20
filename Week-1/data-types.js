// 1. String - represents textual data

const name = "Dana";

const studentName = "Nilufar";

console.log(name);
console.log(studentName);

//  2. Number - represents numeric values

const birthYear = 2000;
const carModel = 2022;

const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

//  3. Boolean - represent logical value, can be either true or false.
// We use mostly let for Boolean.
// Alway try to start variable with IS. ex: isStudentPresent; IsGameStarted;

let isLightOn = false; // The life is off when you enter the room

console.log("Is the light on? ", isLightOn);

//Later, someome comes and turn the light on
isLightOn = true;

console.log(isLightOn);

//  4. Null - represent intencial absents

// In the assigned seats in a party, nobody has arrived so it's null.
let seatOwner = null;

console.log("Seat status:", seatOwner);

// Party starts at 5pm , so

seatOwner = "Bohdana";
console.log(seatOwner);

// 5. Undefined - we're declaring variable, but we dont assign the value ,
// not assigned = undefined.

// Before teacher checking attendance
let studentPresent;
console.log("Student present?", studentPresent);

//Later teacher after checking attendance
studentPresent = "Yes";
console.log("Student present?", studentPresent);

// 6. Arrays (Non-primitive - mutable --> we can change those trough the code) )
// in square brackets []- another data type, represent an ordered collection of value.
//  Access by index ( location , starts from 0.)

const colors = ["red", "green", "blue"]; // red is 0 index, green - has index location #1,
console.log(colors);
const studentScores1 = [70, 85, 89];

// Array that has all kind of data types
const array = ["John", 30, true];
// !!! But try to keep arrays with the same data types!

// 7. Object
// - (Non-primitive - Mutable --> we can change those trough the code.
// You can use both :Let and Const  (
//  Non-primitive )in curly braces {} - represents a collection of key-values pairs to store related data and functionality.
// Object : represents key ( ex: name1) and value ( "Alex"). every key has a value!

const person = {
  name1: "Alex",
  age: 42,
  isStudent: false,
};
console.log(person);

let soccerPlayer = {
  name2: "Cristiano",
  age2: 41,
  isSoccerPlayer: true,
  country: {
    countryName: "Saudia Arabia",
    city: "Riyadah",
    zipCode: "11222",
  },
};
console.log(soccerPlayer);
console.log(soccerPlayer.country);

let ufcFighter3 = {
  name: "Charles Oliviera",
  age: 38,
  isUfcFighter: true,
  country3: {
    countryName: "Brazil",
    city: "Sao Paulo",
    zipCode: 565656,
  },
};
console.log(ufcFighter3);
console.log(ufcFighter3.country3); // Accessing a key in an object

// Test2
