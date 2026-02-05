const numbers = [3, 6, 9, 12, 15];

// map() --> Transforms each element inside an array and then returns a new array
// Try to use arrow functions

const tripled = numbers.map(function (num) {
  return num * 3;
});

// filter() --> keeps only the elements that passes a test and return a new array

const numbersGreatestTen = numbers.filter((num) => num > 10);
console.log(numbersGreatestTen);
