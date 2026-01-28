console.log("Hello World");
console.log("Hello World");

function greetName() {
  console.log("Hello world!");
}
greetName();

function greet() {
  const addition = 3 + 5;
  console.log(addition);
}
greet(); // i.m calling the function.
// //If we don't call we just save function, but we can also call it later
//--> Giving instruction to JS to make my function work

//2. Function with a single parametr

function newGreet(name) {
  //name - called parametrs of the function
  console.log(`Hello ${name} welcome to the class`);
}
newGreet("Dana"); // you have to provide a "name" of the function

// 3. Function wih multiple parametrs

function add(num1, num2) {
  console.log(num1 + num2);
}
add(7, 9);

function printNumber(num1, num2) {
  if (num1 > num2) {
    console.log("Number is bigger");
  } else {
    console.log("Number is smaller");
  }
}
printNumber();

//4. Default parameters

function greetStudent(name = "student") {
  // if we do name= "student" - we provide default value
  console.log(`Hello ${name}, welcome to Java Script class!`);
}
greetStudent();

//5. return Values
function addNewNumber(num1, num2) {
  return num1 + num2;
}

const functionAddNewNumber = addNewNumber(3, 6);
console.log(functionAddNewNumber);

// or

function addNewNumber(num1, num2) {
  const result = num1 + num2;
  return result;
}

const functionAddNewNumberTwo = addNewNumber(3, 6);
console.log(functionAddNewNumberTwo);

//6. Arrow Functions

const greetStudentsTwo = (students) => {
  console.log(`Hello ${students}, welcome to class!`);
};

greetStudentsTwo("Dana");

// another

const substractTwoNumbers = (num1, num2) => num1 - num2;
const resultTwo = substractTwoNumbers(5, 3);

console.log(resultTwo);

const array = ["blue", "red", "green"];
function generateRandomNumber() {
  return 2;
}
const randomNumber = generateRandomNumber();
console.log(array[randomNumber]);

//select command slash

//////////////////////////////////
function dayGreeting() {
  console.log("Good morning!");
}
dayGreeting();

function myDog(name) {
  console.log(`${name} is a good boy`);
}
myDog("Jaycee");

function myName(firstName, LastName) {
  console.log(firstName, LastName);
}
myName("Bohdana", "Hoiuk"); // Bohdana Hoiuk

function printNimber(num1, num2) {
  if (num1 > num2) {
    console.log("Number is bigger");
  } else {
    console.log("Number is smaller");
  }
}
printNimber(3, 1);

function dayToday(dayIs = "good") {
  console.log(`Today is ${dayIs} day`);
}
dayToday();
dayToday("weird");

const myName2 = (name1, name2) => name1 + name2;
console.log("Bohdana", "Robinson");
////

function generateRandom() {
  return 2;
}

const array2 = ["Blue", "green", "Red"];
const randomNumber2 = generateRandom();
console.log(array2[randomNumber2]);
