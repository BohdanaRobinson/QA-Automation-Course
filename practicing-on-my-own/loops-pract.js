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

//Mini-compare

// for → you control the index (i)
// for...of → you get the value directly (num)

// Practice 3 — while loop
// Same idea, different structure.
// Use a while loop
// Print numbers greater than 10

let i = 0;

while (i < numbers.length) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
  i++;
}

// Practice 4: for loop

// Task:
// Given an array of words, print each word that has more than 4 letters.

let array = ["apple", "bat", "orange", "fig", "grape"];
for (let i = 0; i < array.length; i++) {
  if (array[i].length > 4) {
    console.log(array[i]);
  }
}
