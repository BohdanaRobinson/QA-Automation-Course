class Animal {
  speak() {
    console.log("Animal make a sound");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

const cat = new Cat();
cat.speak();

const dog = new Dog();
dog.speak();
