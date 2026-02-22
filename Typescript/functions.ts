function greet(name: string, age: number) {
  console.log(`Hello, my name is ${name} and my age ${age}`);
}
greet("Dana", 25);

function greetUser(name: string = "Guest") {
  console.log(`hello I am ${name}`);
}
greetUser();
greetUser("Dana");

function add(a: number, b: number): number {
  return a + b;
}
add(2, 3);

function printSmth(): void {
  console.log(`Hello`);
}
printSmth();

function checkBalance(amount: number): Promise<string> {
  const balance = 500;

  if (amount <= balance) {
    return Promise.resolve(
      `Withdrawal of ${amount} succesful. Remaining balance: ${balance - amount}`,
    );
  } else {
    return Promise.reject("Insufficient funds");
  }
}

async function performWithdarawal() {
  try {
    const result = await checkBalance(200);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

performWithdarawal();
