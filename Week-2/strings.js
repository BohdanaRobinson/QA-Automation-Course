///// Strings are the text data: " Hello", "Goodbye"

//1.  .lenght - string lenght - tels you how many characters is your string ( including spaces)

let myBoy = "Jaycee";
console.log(myBoy.length); // 6

//2.  Accesing Characters by their index(Starting from 0)

const myDogName = "Jaycee";
console.log(myDogName[3]);
console.log(myDogName[0]);

//3. .toUpperCase() & .toLowerCase() -- Changing  the letter case of a string

let myDog = "Jaycee is a good boy";
console.log(myDog.toUpperCase());
console.log(myDog.toLowerCase());

//4.  .trim() -- removes extra spaces fron start and end of the string

let soccerClub = "    Barcelona    ";
console.log(soccerClub.trim());

//5.  .slice - slices start and end ofa string between two indexes

let city = "NewYork";
console.log(city.slice(2));
console.log(city.slice(0, 3));

// 6.  .replace() - search value, new value - replaces the first match of searchValue with newValue.

let hobby = " I like watching soccer";
console.log(hobby.replace("soccer", "UFC"));

//7  .includes()  - checks if a string contains a specific susbstring.
//return boolean value: true or false

let statement = " I like traveling";
console.log(statement.includes("traveling")); // true
console.log(statement.includes("dancing")); // false

//8.  .split - splits a string into an array using the separator you provide

let ufcChampions = "Porier, Oliviera, Pereira, Jones";
console.log(ufcChampions.split(","));
//console.log(ufcChampions.split(""));

//9.  .concat() - joins two or more strings together

let s = "Software";
let d = "Development";
let l = "Lyfecycle";

console.log(s.concat(" ", d, " ", l));

// or //
console.log(s + " " + d + " " + l);

// 10. .indexOf -- returns the position (index) of thr first occurence of a substring.

let mySong = "Jaycee is a good boy";
console.log(mySong.indexOf("good")); // 12 (includes spaces)
console.log(mySong.indexOf("bad")); // -1 (cuz bad word does not exist in this string);

//11.  .startsWith() & .endsWith() - checks whether a string starts or ends with a certain substring.
// case sensitive
let fixLogFile = "Todaysfix.log";
console.log(fixLogFile.startsWith("yesterdays")); // false
console.log(fixLogFile.startsWith("todays")); // false (case sensitive);

// 12.
//

// Template literals - make working simpler and cleaner

let name1 = "Dana";
let message = `${name1}, It's time go to sleep`; // must use `` not ""

console.log(message);

// 13. Multi-line Strings - create multi- line strings

let sdlc = `Software Dewelopment Lyfe Cycle is a cycle ,
trough which a software from  idea
 becomes a product.`;
console.log(sdlc);

//14. Expressions Inside templates Literals - perform calculations or function calls directly ${}

let birthDay = 23;
let birthDayMonth = "February";
let birthDayYear = 2000;

console.log(
  `The date of my birth is a combination of ${birthDay} ${birthDayMonth}  ${birthDayYear}. It's my birthday soon. Happy Birthday to Senior Software Engineer`,
);
