//Practice 1 — for loop (arrays)

// You have an array of numbers.
// Loop through it
// Print only numbers greater than 10

let numbers = [3, 12, 5, 20, 8, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}

// What this does:
// i moves through indexes
// numbers[i] gets each value
// if filters values greater than 10
// console.log prints only those

//Practice 2 — for...of loop

// Loop through the array
// Print only numbers greater than 10
// Use for...of

for (let num of numbers) {
  if (num > 10) {
    console.log(num);
  }
}
