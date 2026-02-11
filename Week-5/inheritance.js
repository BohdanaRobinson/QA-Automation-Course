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
slooowCar.slowcarveryslowdring();

const ferrari = new SportsCar();
ferrari.drive(); // Driving
ferrari.turboBoost(); /// Turbo boost activated
