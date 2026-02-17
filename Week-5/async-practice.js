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

// ## Task 4: Async Breakfast

// Create a function:

// ```jsx
// makeCoffee()
// ```

// It should:

// - Return a Promise
// - After 2 seconds, resolve with:

//     ```
//     "Coffee is ready"
//     ```

// Then create an **async function**:

// ```jsx
// startMorning()
// ```

// It should:

// 1. Await `makeCoffee()`
// 2. Log the result
// 3. Log:

//     ```
//     Morning started
//     ```

function makeCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Coffee is ready");
    }, 2000);
  });
}

async function startMorning() {
  try {
    const result = await makeCoffee();
    console.log(result);
    console.log("Morning started");
  } catch (error) {
    console.log("no coffe today");
  }
}

startMorning();

// ## Task 5: Async Error Handling

// Create a function:

// ```jsx
// makeSandwich(hasBread)
// ```

// It should:

// - Return a Promise
// - After 1 second:
//     - Resolve `"Sandwich is ready"` if `hasBread` is true
//     - Reject `"No bread available"` if false

// Create an async function:

// ```jsx
// prepareLunch()
// ```

// Inside it:

// 1. Use `try…catch`
// 2. Await `makeSandwich(false)`
// 3. Log the result or error message

function makeSandwich(hasBread) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasBread) {
        resolve("Sandwich is ready");
      } else {
        reject("No bread available");
      }
    }, 1000);
  });
}

async function prepareLunch() {
  try {
    const result = await makeSandwich(false);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

prepareLunch();

// # PROMISE.ALL

// ## Task 6: Parallel Tasks

// Create three functions:

// - `washCar()`
// - `cleanRoom()`
// - `doLaundry()`

// Each:

// - Returns a Promise
// - Resolves after different times:
//     - Car: 2 seconds
//     - Room: 1 second
//     - Laundry: 3 seconds
// - Logs when finished

// Then:

// 1. Create an async function:

//     ```jsx
//     startChores()
//     ```

// 2. Use `Promise.all()` to run all three tasks at once
// 3. After all finish, log:

//     ```
//     All choresdone
//     ```

function washCar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Car washed");
      resolve("Car done");
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Room cleaned");
      resolve("Room done");
    }, 1000);
  });
}

function doLaundry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Laundry done");
      resolve("Laundry done");
    }, 3000);
  });
}

async function startChores() {
  const result = await Promise.all([washCar(), cleanRoom(), doLaundry()]);
  console.log(result);
}
startChores();

// ## Task 7: Full Dinner Sequence

// Create three promise-based functions:

// - `cookRice()`
// - `cookChicken()`
// - `makeSalad()`

// Each:

// - Returns a Promise
// - Uses different delays
// - Resolves with a message when done

// Then create:

// ```jsx
// asyncfunctionmakeDinner()
// ```

// It should:

// 1. Run all three using `Promise.all()`
// 2. Log each result
// 3. Log:

//     ```
//     Dinner is ready!
//     ```

function cookRice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rice is cooked");
    }, 1000);
  });
}

function cookChicken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Chicken is ready");
    }, 3000);
  });
}

function makeSalad() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Salad is ready");
    }, 5000);
  });
}

async function makeDinner() {
  const results = await Promise.all([cookRice(), cookChicken(), makeSalad()]);

  // Log each result
  results.forEach((result) => console.log(result));

  console.log("Dinner is ready!");
}
makeDinner();
