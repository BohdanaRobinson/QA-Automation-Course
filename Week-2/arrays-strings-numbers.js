let carBrand = ["BMW", "Mercedes-Benz", "Porshe", "Toyota", "Dodge"];
let lucckyNumbers = [1, 23, 3, 49, 11, 28];
let newString = "       Good Boy     ";
let successRate = 99.9;

// Part1
//1.
console.log(carBrand[0]); //Log the first car brand
console.log(carBrand.at(4)); // 2. Log the last car brand using a method
console.log(carBrand.length); // Log how many car brands are in the array

//Task 2: Updating Elements
carBrand[1] = "Lexus";
console.log(carBrand);

carBrand[4] = "Nissan";
console.log(carBrand);

//Task 3: Mutator Methods
carBrand.push("Tesla"); //Add a new car brand to the end
console.log(carBrand);

carBrand.pop(); //Remove the last car brand
console.log(carBrand);

carBrand.unshift("Volvo"); // Add a new car brand to the beginning
console.log(carBrand);

carBrand.shift(); //Remove the first car brand
console.log(carBrand);

carBrand.reverse(); //Reverse the array
console.log(carBrand);

carBrand.sort();
console.log(carBrand);
