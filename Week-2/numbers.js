/////------Numbers---------//////////
// number represents a numeric values, icludind
// whole numbers (integers)
/// and decimal numbers(floating-point);

let age = 35; // whole numbers
let price = 6.99; // decimal number

////-----Basic Number Operations////////
//1. Addition
console.log(5 + 3);

// 2. Substraction
console.log(9 - 4);

//3. Multiplication
console.log(2 * 4);

//4. Division
console.log(8 / 4);

//5. Remainder
console.log(8 % 3);

/////-- 1. Comparing numbers---

console.log(10 > 6);
console.log(4 > 6);
console.log(8 === 8); /// false
console.log(3 !== 1); /// true

//2. Rounding numbers

// Math.round() - rounds to the nearest whole number
console.log(Math.round(8.7)); // 9
console.log(Math.round(4.5)); // 5

// Math.floor() - always rounds down

console.log(Math.floor(6.8)); // 6
console.log(Math.floor(4.8)); // 4

// Math.ceil() - Always rounds up
console.log(Math.ceil(5.3)); //6
console.log(Math.ceil(4.8)); // 5

// Math.trunc() - removes the decimal part
console.log(Math.trunc(7.9)); //7
console.log(Math.trunc(1.1)); // 1

//3. Formatting Numbers
//  .toFixed() - formats a number to a fixed number of decimal places.
// Always returns a string, not a number

let temperature = 36.669;
console.log(temperature.toFixed(1)); //36.7

//4. converting number

// Number() - converts a value into a number
console.log(Number("6")); // 6
console.log(Number("abvc")); // Nan not a number

// parceInt() - Converts a value into a integer by removing decimals

console.log(parseInt("9.99")); // 9

// parseFloat() - converts a value into a decimal number

console.log(parseFloat("7.77")); // 7.77

// 5. Checking number
// isNaN() - checks whether a value is NOT a Number

console.log(isNaN("abc")); // true
console.log(isNaN(7)); // false

//. Number.isInteger() - Checks whether a value is an integer
console.log(Number.isInteger(6)); //true
console.log(Number.isInteger(5.6)); // false

///////////Math Utility Methods

// 1. Math.abs() - Returns the absolute value of a number.
//● If the number is negative, it becomes positive
//● If itʼs already positive, it stays the same
//● If itʼs 0, it stays 0

console.log(Math.abs(-87)); // 87

//2. Math.min() - Returns the smallest value.
console.log(Math.min(78, 0, 99, 3, 5)); // 0

//3 Math.max() - Returns the largest value.
console.log(Math.max(78, 0, 99, 3, 5)); // 99

//4. Math.pow() - Raises a number to a power.
console.log(Math.pow(5, 2)); //25

//5. Math.sqrt() - Returns the square root of a number.
console.log(Math.sqrt(225)); // 15

//6. Math.random() - Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
//
console.log(Math.random());

//In order to get a random number in the range you want, there is a general formula for it.
// formula :
// Math.floor(Math.random() * (max - min +1 )) + min

//Example: Generating a number between 50 and 60
let generatednumbers = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
console.log(generatednumbers);
