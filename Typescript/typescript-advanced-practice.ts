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

// ## Task 6: Literal Type

// Create a literal type called **OrderStatus**.

// It must allow only the following values:

// - "pending"
// - "shipped"
// - "delivered"

// Then create a variable that uses this type.

type OrderStatus = "pending" | "Shipped" | "Delivered";
let myStatus: OrderStatus = "pending";

// ## Task 7: Union Type

// Create a type alias called **ID**.
// It must allow:
// - number
// - string
// Then create two variables using this type (one number and one string).
type Id = number | string;
let userId: Id = 2;
let hisUserId: Id = "thatId";

// ## Task 8: Basic Interface

// Create an interface called **User**.
// It must contain:
// - id (number)
// - name (string)
// - email (string)

// Then create an object using this interface.

interface User {
  id: number;
  name: string;
  email: string;
}

const myUser: User = {
  id: 22,
  name: "Jaycee",
  email: "jaycee@tojtech.com",
};

// ## Task 9: Optional Property

// Update the **User** interface.

// Add:

// - phone (optional string)

// Create a new user object that does not include the phone property.

interface User {
  phone?: string;
}

const newUser: User = {
  id: 3,
  name: "Charles",
  email: "charles@ufc.com",
};

// ## Task 10: Extending Interfaces

// Create a new interface called **Admin**.

// Requirements:

// - It must extend the User interface.
// - It must include a role property that only allows the literal value "admin".
// - It must include a permissions property (array of strings).

// Then create an Admin object.

interface Admin extends User {
  role: "admin";
  permissions: Array<string>;
}
const adminObject: Admin = {
  id: 23,
  name: "JC",
  email: "jC@tojtech.com",
  role: "admin",
  permissions: ["read", "write", "execute"],
};

// # PART 5: PICK & OMIT

// ## Task 11: Pick

// Using the User interface, create a new type called **UserPreview*
// Requirements:

// - It must only include id and name.
// - Create an object using this type.

type UserPreview = Pick<User, "id" | "name">;

const user1 = { id: 20, name: "Kate" };

console.log(user1);
