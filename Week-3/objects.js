//1. Looping over object
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
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
