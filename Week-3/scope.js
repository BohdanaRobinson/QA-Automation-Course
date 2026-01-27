// 1. global Scope

let globalVar = "I am global";
console.log(globalVar);

function printSomething() {
  console.log(globalVar);
}
printSomething();

//2. Function Scope

function scope() {
  let message = "Hello from inside the function!";
  console.log(message);
}

scope();
