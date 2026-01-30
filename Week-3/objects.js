//1. Looping over object
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello my name is Dana");
  },
  bye() {
    console.log("I am Dana, bye"); // this way is better to use
  },
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

///2. "in " key word - checks if a key exists. (true/false result)
console.log("name" in person);
console.log("weight" in person);

//3. Accessing object values

console.log(person.name);
console.log(person.age);

//or
console.log(person["name"]);
console.log(person["age"]);

//4. Adding and updating properties
console.log(person);

person.height = 170; //Adding is height doesn't exist.
console.log(person);

// but it does exist , u write  the same but  it will update

//5.   "delete" keyword - Removing properties
delete person.height;
console.log(person);

//6. Object methods

person.greet();
person.bye();

// 7.  Using "This" keyword

const car = {
  brand: "Tesla",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};
car.info();

// 8. Built object methods
// Object.keys , Object.values , Object.entries
