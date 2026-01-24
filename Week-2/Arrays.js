//1 . Array - is a data type that can store differnt elements.

let fruits4 = ["Apple", "Orange", "Banana"];
console.log(fruits4);

//2. Accessing Array Elements

console.log(fruits4[0]); // Output Apple
console.log(fruits4[1]); // -> Orange

//3. Updating array elements

let fruits1 = ["Apple", "Orange", "Banana", "Kiwi"];

fruits1[1] = "Mango";
console.log(fruits1);

fruits1[3] = "Srawberry";
console.log(fruits1);

//4.  Lenght - returns how many elements inside in array

console.log(fruits1.length);

//////////////Metods that return new array

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

///////-----------------Methods that chsnge the original array----------
// 1. Copying an array
const originalFruits = ["Kiwi", "Banana", "Cherry"];
const richardFruits = [...originalFruits];

console.log(originalFruits);
console.log(richardFruits);

// 2. push () - adds a new element at the end of any array
console.log(originalFruits);
richardFruits.push("Coconut");
console.log(richardFruits);

//3. pop() - removes the last element of the arrau\y

richardFruits.pop();
console.log(richardFruits);

//4. .unshift() - add an element at the beginning of an array
richardFruits.unshift("Grapes");
console.log(richardFruits);

//5. .shift() - removes the first element from an array
console.log(originalFruits);
richardFruits.shift();
console.log(richardFruits);

//6.  .reverse() an array

console.log(originalFruits);
console.log(richardFruits.reverse());

//7. .sort() - sorts the array ---> commonly used with numbers

const newNumbers = [3, 6, 8, 15, 1, 77, 32]; // very disorganized
newNumbers.sort((a, b) => a - b); // New sorted numbers

console.log(newNumbers);

const stringArrays = ["a", "c", "z", "b"];
stringArrays.sort();

//// --------Methods that find an element in the array ////
//1. .indexOf() - Returns the first match  index of a specifix element inside an array
// ALways retirns the first match

const akbarAliFaboriteColors = ["Black", "White", "Red", " Blue"];
console.log(akbarAliFaboriteColors.indexOf("Red"));

// 2.  .lastIndexOf  --- returns the last index of the value

console.log(akbarAliFaboriteColors.lastIndexOf("Blue"));

//3.  .at() --- gets an element at a specific position

console.log(akbarAliFaboriteColors.at(1));

//4 .includes() - checks if an element exists inside an array. it will always return boolean value true or false
// it's case sensitive
const trainsLane = ["F", "E", "B", "D"];
console.log(trainsLane.includes("O")); // false

////////--------- The joiners & Converters//////////

///1.    .join() - converts array into a string with a specified seperator

const danasFruitsArray = ["Apple", "Banana", "Kiwi"];
const danasfruitsString = danasFruitsArray.join();
console.log(danasfruitsString);

/// 2/ Array.from() --- creates a new array from an iterable data type

const str = "Jaycee";
const sprt = Array.from(str);
console.log(sprt);

///3. Array.isArray() ---- checks if a value is array -- boolean true or false

const nameId = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(nameId));

const name = "Dana";
console.log(Array.isArray(name));
