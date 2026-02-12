// ## Task 1: Create a Car Class

// Create a class called `Car` that:
// 1. Has a constructor with:
//     - brand;  - price;
// 2. Includes a **private fuel property**:
//     - `#fuelLevel` ;- Starts at 100;
// 3. Has these methods:
//     - `drive()` → reduces fuel by 10
//     - `refuel()` → sets fuel back to 100
//     - `getInfo()` → returns a sentence about the car

// 📌 Must use `this` inside every method.

class Car {
  static totalCars = 0;
  #fuelLevel = 100;

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;

    Car.totalCars++; // increase counter every time new car is created
  }
  static showTotalCars() {
    return Car.totalCars++;
  }
  //   drive() {
  //     this.#fuelLevel -= 10; // we are reducing fuel
  //     return this.#fuelLevel;
  //   }
  // Task 4. after modifying  `drive()` method:
  // - Must call `#consumeFuel()`
  // - Must NOT change fuel directly

  drive() {
    this.#consumerFuel(); /// we call private method
    return this.#fuelLevel;
  }
  refuel() {
    this.#fuelLevel = 100; // we are reseting fuel
    return this.#fuelLevel;
  }

  getInfo() {
    return `The car is ${this.brand} , with a price $ ${this.price} and it's full of fuel `;
  }

  //discount(amount) Task2 - Reduces the price by the given amount
  discount(amount) {
    this.price -= amount;
    return this.price;
  }

  //isExpensive(limit) Task2 isExpensive(limit)`
  //     - Returns:
  //         - `"Expensive"` if price is above the limit
  //         - `"Affordable"` otherwise
  isExpensive(limit) {
    if (this.price > limit) {
      return `Expensive`;
    } else {
      return `Affordable`;
    }
  }

  //Task 3//Create a getter called priceTag,
  // Returns the price with a dollar sign
  get priceTag() {
    return `$${this.price} `;
  }

  //Task 3. Create a **setter** called `updatePrice`
  // - Accepts a new price
  // - If the price is negative:
  //     - Set price to 0
  // - Otherwise:
  //     - Update normally

  set updatePrice(newPrice) {
    if (newPrice < 0) {
      return (this.price = 0);
    } else {
      return (this.price = newPrice);
    }
  }

  #consumerFuel() {
    this.#fuelLevel -= 10; // we are reducing fuel
    return this.#fuelLevel;
  }
}

const carDetails = new Car("BMW", 15000);
console.log(carDetails.drive());
console.log(carDetails.refuel());
console.log(carDetails.getInfo());
console.log(carDetails.discount(1000));
console.log(carDetails.isExpensive(9000));
console.log(carDetails.priceTag);
console.log(Car.showTotalCars()); //Returns the number of cars created

// ## Task 6: ElectricCar Class

// Create a new class `ElectricCar` that:

// 1. Extends the `Car` class
// 2. Adds a new property:
//     - batteryRange
// 3. Overrides the `drive()` method:
//     - Reduces batteryRange by 20
// 4. Adds a new method:
//     - `charge()` → sets batteryRange back to 100

// 📌 Must use `extends` and `super()`.

class ElectricCar extends Car {
  constructor(brand, price, batteryRange) {
    super(brand, price);
    this.batteryRange = batteryRange;
  }
  //Override drive
  drive() {
    this.batteryRange -= 20;
    return `Battery left: ${this.batteryRange}`;
  }

  charge() {
    this.batteryRange = 100;
    return `Battery is full : ${this.batteryRange}`;
  }
}
//Create an instance
const moreCarDetails = new ElectricCar("Tesla", 5000, 100);
console.log(moreCarDetails.drive());
console.log(moreCarDetails.charge());

// ## Task 7: Same Method, Different Behavior

// 1. Create:
//     - One `Car` object
//     - One `ElectricCar` object
// 2. Call `drive()` on both.

// 📌 Each object should behave differently

class DifferentBehaviourCar {
  drive() {
    return `Each object should behave differently `;
  }
}
class Car1 extends DifferentBehaviourCar {
  drive() {
    return `This is a  different statement for my car task 1 `;
  }
}
class ElectricCar2 extends DifferentBehaviourCar {
  drive() {
    return `Totally different`;
  }
}
const object1 = new Car1();
const object2 = new ElectricCar2();
console.log(object1.drive());
console.log(object2.drive());

////
// // ## Task 8: Garage Manager

// // Create a class called `Garage` that:

// // 1. Has a constructor with:
// //     - garageName
// //     - cars (an empty array)
// // 2. Has these methods:
// //     - `addCar(car)` → adds a car to the array
// //     - `listCars()` → returns a list of car brands
// //     - `findExpensive(limit)`
// //         - Returns all cars above the limit

// // 📌 Must use:

// // - class methods
// // - arrays inside the class
// // - `this`

// class Garage {
//     constructor(garageName){
//         this.garageName = garageName;
//         this.cars = [];
//     }
//     }

//     addCar(car) {
//      this.car.push();
//     }
//     listCars() {
//     return this.cars.map(car => car.brand);;
//     }

//     findExpensive(limit){

//     }
// const garage = new Garage ("Terminal Market", "Porshe");
// console()
