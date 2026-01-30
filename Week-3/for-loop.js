// 1.

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for (let i = 1; i <= 5; i++) {
  // we use only let here , we don't use const cuz we reasssign let i later.
  console.log("Count:", i);
}

const fruits = ["Apple", "Banana", "Orange"];

for (let index = 0; index < fruits.length; index++) {
  console.log(`Fruit at index ${index}`, fruits[index]);
}
