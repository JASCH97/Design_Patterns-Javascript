/*
- - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - - 
The Factory Design Pattern is a creational pattern that provides an interface for creating 
objects in a super class but allows subclasses to alter the type of objects that will be created. 
It encapsulates the object creation process and provides a way to create instances of classes 
without exposing the underlying instantiation logic. This pattern promotes loose coupling between 
client code and the specific classes being instantiated.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - - 
Product (or Product Interface): This is the abstract or interface class that defines the type of 
objects the factory can create.

Concrete Products: These are the subclasses or implementations of the product interface. They 
define the specific objects that will be created by the factory.

Factory (or Factory Interface): This is the abstract class or interface that declares a factory 
method for creating objects. This method returns instances of the product interface.

Concrete Factory: This is the subclass of the factory interface that implements the factory method. 
It is responsible for creating concrete product instances.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Decoupling: The Factory pattern decouples the client code from the specific classes being instantiated, 
which makes the code more flexible and easier to maintain.

Extensibility: Adding new product types (subclasses) or variations is easier, as you only need to create 
a new concrete product and a corresponding concrete factory.

Centralized Object Creation: The instantiation logic is centralized in the factory, making it easier to 
manage and maintain consistency in object creation.
*/

// ************************* Animal Example: *************************

class Dog {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return "Woof!";
    }
  }
  
  class Cat {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return "Meow!";
    }
  }
  
  class AnimalFactory {
    createAnimal(type, name) {
      switch (type) {
        case "dog":
          return new Dog(name);
        case "cat":
          return new Cat(name);
        default:
          throw new Error("Invalid animal type");
      }
    }
  }
  
  const animalFactory = new AnimalFactory();
  const myDog = animalFactory.createAnimal("dog", "Buddy");
  const myCat = animalFactory.createAnimal("cat", "Whiskers");
  
  console.log(myDog.speak()); // Output: Woof!
  console.log(myCat.speak()); // Output: Meow!



// ************************* Shape Example: *************************

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }
  }
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    draw() {
      console.log(`Drawing a square with side length ${this.sideLength}`);
    }
  }
  
  class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    draw() {
      console.log(`Drawing a triangle with base ${this.base} and height ${this.height}`);
    }
  }
  
  class ShapeFactory {
    createShape(type, ...args) {
      switch (type) {
        case 'circle':
          return new Circle(...args);
        case 'square':
          return new Square(...args);
        case 'triangle':
          return new Triangle(...args);
        default:
          throw new Error(`Unsupported shape type: ${type}`);
      }
    }
  }
  
  const shapeFactory = new ShapeFactory();
  
  const circle = shapeFactory.createShape('circle', 5);
  circle.draw(); // Drawing a circle with radius 5
  
  const square = shapeFactory.createShape('square', 4);
  square.draw(); // Drawing a square with side length 4
  
  const triangle = shapeFactory.createShape('triangle', 3, 6);
  triangle.draw(); // Drawing a triangle with base 3 and height 6