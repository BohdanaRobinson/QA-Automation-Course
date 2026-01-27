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
