class Car {
  drive() {
    console.log("Driving...");
  }
}
class SportsCar extends Car {
  turboBoost() {
    console.log("Turbo boost activated!");
  }
}

class SlowCar extends Car {
  slowcarveryslowdring() {
    console.log("I'm slow");
  }
}

const slooowCar = new SlowCar();
slooowCar.slowcarveryslowdring(); //i'm slow

const ferrari = new SportsCar();
ferrari.drive(); // Driving
ferrari.turboBoost(); /// Turbo boost activated

///////Inheritance with extends and super

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name} is sleeping}`);
  }

  eat() {
    console.log(`${this.name} is eating now`);
  }

  introduce() {
    console.log(
      `the animal's name is ${this.name} and it's ${this.age} years old`,
    );
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log("woof");
  }
}

const dog = new Dog("Buddy", 3, "boxer");
dog.sleep(); //Buddy is sleeping
dog.eat();
dog.introduce();
dog.bark();
