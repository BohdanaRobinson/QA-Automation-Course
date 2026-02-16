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
