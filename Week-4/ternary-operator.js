/// 1. Example with ternary
//

let age = 18;
let message = age >= 18 ? "You an adult." : "You are an minor";

console.log(message);

// Example with if else

let ageTwo = 15;
if (ageTwo >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor");
}

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(12));

let isLoggedIn = true;
let status = isLoggedIn ? "Welcome back" : "please loggedIn";
console.log(status);

//// ternary operators with template literas;

let name = "Dana";
let isVIP = true;

console.log(`Hello, ${isVIP ? "VIP" : "Guest"} ${name}!`);
