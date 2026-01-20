let age = 24;

// age >18 -> true. // if 24 >18 our condition is true,
// then IT WILL PRINT in our terminal that line "Hey you can go to...."
//but if our condition is not true
// then we will not see that comment "hey go to...,
// it will print us only the value of our vaiable "
if (age > 18)
  if (age > 18) {
    // 'if' is keyword provided by JS.
    //Inside paranthesis (), we need to give a condition.
    // Inside curly braces {}, we have provide the code that we want it to run if the condition is true.
    //
    console.log("Hey. You are at the age that you can go to college!!!");
  }
console.log(age);

// 2. IF  --- Example when the condition is false and we reassigned the age.

age = 13;

if (age > 18) {
  console.log("Hey, you are at the age to go to school");
}
console.log(age);

//  3. Else if

let studentScore = 75;
if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 75) {
  console.log("Grade B");
}

console.log(studentScore);

//  4. Else

let isRaining = false;
if (isRaining) {
  console.log("Take youe umbrella with you, you are going to get wet!");
} else {
  console.log("You don't need an umbrella , it's sunny outside!");
}

//  5. If, Else If, Else

// = is used for assigning
// === is used for comparison

let goalscore = 2;

if (goalscore > 1) {
  console.log("You are winning");
} else if (goalscore === 3) {
  console.log("Its time");
} else {
  goalscore < 3;
  console.log("You are losing");
}

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Finally Friday");
    break;
}
