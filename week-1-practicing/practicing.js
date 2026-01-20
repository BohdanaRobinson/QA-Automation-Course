const birthYear = 2000;
const carModel = 2024;
const studentScore2 = 76;

console.log(birthYear);
console.log(carModel);
console.log(studentScore2);

let isWeatherNice = false;
console.log("Is the weather nice?", isWeatherNice);
isWeatherNice = true;
console.log("Is the weather nice?", isWeatherNice);

let ufcChampion = null;
console.log("fighter", ufcChampion);
ufcChampion = "Pereira";
console.log("fighter", ufcChampion);

let bmfBelt;
console.log("bmfBelt?", bmfBelt);
bmfBelt = "Max Holloway";
console.log("bmfBelt?", bmfBelt);

const fighters1 = ["Porier", "Oliviera", "Chama"];
console.log(fighters1);

const fighter2 = {
  name2: "Alex Pereira",
  age: 38,
  isFighter: true,
};

let age = 20;// if 20>18 our condition is true, 
// then IT WILL PRINT in our terminal that line "Hey you can go to...."
//but if our condition is not true 
// then we will not see that comment "hey go to..., 
// it will print us only the value of our vaiable "
if (age > 18) {
  console.log("Hey, go to school!!!");
}
console.log(age);
