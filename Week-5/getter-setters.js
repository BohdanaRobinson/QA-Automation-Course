class ChaseBankAccount {
  #balance; // private field

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.log("Balance cannot be negative!");
    }
  }
}
const account1 = new ChaseBankAccount("Alice", 500);
console.log(account1.balance); // 500

account1.balance = 1000;
console.log(account1.balance); //1000

////// 2nd Method
class CapitalOneBankAccount {
  #balance; // private field

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.log("Balance cannot be negative!");
    }
  }
}

const account = new CapitalOneBankAccount("Alice", 500);
console.log(account.getBalance()); // 500

account.setBalance(1000);
console.log(account.getBalance()); //1000
