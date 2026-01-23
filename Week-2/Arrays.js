//3. Updating array elements

let fruits = ["Apple", "Orange", "Banana", "Kiwi"];

fruits[1] = "Mango";
console.log(fruits);

fruits[3] = "Srawberry";
console.log(fruits);

//4.  Lenght - returns how many elements inside in array

console.log(fruits.length);

//////////////Metoda that return new array

//5. concat() - merges array into one array
const fruitsTwo = ["Apple", "Banana", "Orange"];
const moreFruits = ["Cherry", "Grape"];
const allFruits = fruitsTwo.concat(moreFruits);

console.log(allFruits);

//6. .flat() - flattens the arrays
const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

console.log(nestedNumbers);
console.log(flatNumbers);

//7. .slice() - extracts a portiom of an array by index

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

// slice (1 is index here - included, 4 is also index here - excluded )
const slicedNumbersArray = numbers.slice(1, 4);
console.log(slicedNumbersArray);

const myFavoriteColors = ["green", "yellow", "blue", "red", "white"];
const mySlicedFavoriteColors = myFavoriteColors.slice(1, 4);
console.log(mySlicedFavoriteColors);

// 1.
const originalFruits = ["Kiwi", "Banana", "Cherry"];
const richardFruits = [...originalFruits];

console.log(originalFruits);
console.log(richardFruits);
