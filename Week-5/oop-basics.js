class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} yers old`);
  }
}
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet();
bob.greet();

const soccerPlayer = {
  name: "Cristiano",
  age: 41,
  country: "Portugal",
};

// Example 2 .

class Phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }
  describe() {
    console.log(
      `This phone is a ${this.brand} ${this.model} and has a storage of ${this.storage}. The color is ${this.color}`,
    );
  }
  greetCustomer() {
    return "Hello customer, this is your newe phone. Please Enjoy!!!";
  }
}

const iPhone17 = new Phone("Apple", "Iphone 17", "512GB");
console.log(iPhone17);
iPhone17.describe();
const samsungA7 = new Phone("Samsung", "A7", "256GB");
console.log(samsungA7);

samsungA7.describe();
