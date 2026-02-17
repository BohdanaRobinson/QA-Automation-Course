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
    if (pizzaAvailable) resolve("Pizza is ready");
    else {
      reject("No igradients");
    }
  }, 2000);
}
makePizza()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
