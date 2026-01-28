let carBrands = ["Bmw", "Nissan", "Mercedez", "Toyota"];
console.log(carBrands);

let numbers = [4, 55, 85, 25];
console.log(numbers);

let sentence = " It's so cool and convenient to own a car";
console.log(sentence);

let price = 9.99;
console.log(price);

// ## PART 1: STRING + FUNCTIONS

// ### 🔤 Task 1: Clean & Format Text

function string() {
  let stringExample = "   Practice    ";
  return stringExample.trim().toLowerCase();
}
let result = string();

console.log(result);
