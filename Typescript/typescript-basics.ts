const studentName: string = "Bohdana";
const course: string = "Automation";

let age: number = 26;
let price: number = 29.99;

let isStudent: boolean = true;
let isOnline: boolean = false;

let randomValue: any = "Weather";
randomValue = true;
randomValue = 7;

let city = "Barcelona";
//city = 5; city value type is not a number

let carBrands: string[] = ["BMW", "Nissan", "Tesla", "Porshe"];

let scores: number[] = [90, 96, 98, 85, 100];

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Dana",
  age: 26,
  isAdmin: false,
};

let product: { title: string; price: number; inStock: boolean } = {
  title: "Barcelona poster",
  price: 99.99,
  inStock: true,
};

const students: {
  name: string;
  age: number;
  isActive: boolean;
}[] = [
  { name: "Dana", age: 25, isActive: true },
  { name: "Sean", age: 32, isActive: false },
  { name: "Jaycee", age: 2, isActive: true },
];

console.log(students);
