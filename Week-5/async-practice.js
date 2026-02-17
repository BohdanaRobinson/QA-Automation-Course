// ## Task 1: Callback Greeting

// Write a function:

// ```jsx
// prepareGreeting(callback)
// ```
// It should:
// 1. Wait 2 seconds using `setTimeout`
// 2. Then call the callback with the message:

//     ```
//     "Hello, your greeting is ready!"
//     ```

// Then:
// - Call the function
// - Pass a callback that logs the message

function prepareGreeting(callback) {
  setTimeout(() => {
    callback("Hello, your greeting is ready!");
  }, 2000);
}
prepareGreeting(function (message) {
  console.log(message);
});

// ## Task 2: Create a Promise

// Create a function:

// ```jsx
// makePizza()
// ```

// It should:

// 1. Return a new Promise
// 2. Wait 2 seconds
// 3. If a variable `pizzaAvailable` is true:
//     - resolve with `"Pizza is ready"`
// 4. Otherwise:
//     - reject with `"No ingredients"`

// Then:

// - Call the function
// - Use `.then()` and `.catch()` to handle the result

function makePizza() {
  return new Promise((resolve, reject) => {
    let pizzaAvailable = true;

    setTimeout(() => {
      if (pizzaAvailable) resolve("Pizza is ready");
      else {
        reject("No igradients");
      }
    }, 2000);
  });
}

makePizza()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//   ## Task 3: Promise with Number Check

// Create a function:

// ```jsx
// checkNumber(num)
// ```

// It should:

// 1. Return a Promise
// 2. After 1 second:
//     - Resolve with `"Even number"` if the number is even
//     - Reject with `"Odd number"` if the number is odd

// Call the function and handle results using:

// ```jsx
// .then()
// .catch()
// ```

function checkNumber(num) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        /// check is number is even
        resolve("Even number");
      } else {
        reject("Odd number");
      }
    }, 1000);
  });
}

checkNumber(10)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
