// ## Task 1: Price Calculator

// Create a function called **calculateTotal**.
// - It must accept two parameters: price and quantity.
// - Both parameters must be typed as numbers.
// - The function must return a number.
// - It should return the result of multiplying price by quantity.

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

// ## Task 2: Greeting with Default Parameter

// Create a function called **greetUser**.

// Requirements:

// - It must accept a name parameter (string).
// - It must accept a role parameter that defaults to "User".
// - The function must return a string.
// - The returned string should greet the user and mention their role.

function greetUser(name: string, role = "User"): string {
  return `hello ${name}, you are a super ${role}`;
}

// ## Task 3: Void Function
// Create a function called **logMessage**.
// Requirements:
// - It must accept a string parameter.
// - The return type must be void.
// - It should log the message to the console.

function logMessage(message: string): void {
  console.log(`Log:  ${message}`);
}

logMessage("everything is running smoothly");

// ## Task 4: Simple Promise

// Create a function called **validatePassword**.

// Requirements:

// - It must accept a string parameter called password.
// - It must return a Promise of type string.
// - If the password length is at least 8 characters, resolve with the message "Valid password".
// - Otherwise, reject with the message "Password too short".

function validatePassword(password: string): Promise<string> {
  if (password.length >= 8) {
    return Promise.resolve("Valid password");
  } else {
    return Promise.reject("Password too short");
  }
}

// ## Task 5: Async Function
// Create an async function called **checkPassword**.
// Requirements:
// - It must call the validatePassword function.
// - It must use await.
// - It must use try/catch.
// - It should log either the success message or the error message.

async function checkPassword(password: string): Promise<void> {
  try {
    const result = await validatePassword(password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
