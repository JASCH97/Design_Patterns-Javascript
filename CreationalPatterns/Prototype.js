/*
- - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - - 
The Prototype Design Pattern allows you to create new objects by copying an existing object, 
known as the prototype. It specifies the kind of objects to create using a prototypical instance 
and then creates new objects by copying that prototype.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - - 
Prototype Interface/Class: This defines the methods that must be implemented by concrete prototypes. 
It usually includes a clone method for copying the object.

Concrete Prototype: These are the objects that implement the prototype interface. They provide 
the actual cloning mechanism and are used as the basis for creating new objects.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Reduced Object Creation Overhead: The Prototype pattern allows you to create new objects by 
copying existing ones, which can be more efficient than creating objects from scratch.

Dynamic Object Creation: You can create new objects with different properties and configurations 
by copying prototypes and modifying them.

Flexible Design: The Prototype pattern allows for easy addition of new prototypes without changing 
existing code.
*/

// ************************* Cloneable Objects Example: *************************
// Prototype Interface
class Shape {
    constructor() {
      this.type = null;
    }
  
    clone() {
      throw new Error('clone method must be implemented');
    }
  }
  
  // Concrete Prototypes
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.type = 'Circle';
      this.radius = radius;
    }
  
    clone() {
      return new Circle(this.radius);
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.type = 'Square';
      this.sideLength = sideLength;
    }
  
    clone() {
      return new Square(this.sideLength);
    }
  }
  
  // Client Code
  const circlePrototype = new Circle(5);
  const clonedCircle = circlePrototype.clone();
  console.log(clonedCircle); // Circle { type: 'Circle', radius: 5 }


  // ************************* Registry Example: *************************

  // Prototype Registry
class PrototypeRegistry {
    constructor() {
      this.prototypes = {};
    }
  
    register(name, prototype) {
      this.prototypes[name] = prototype;
    }
  
    create(name) {
      if (this.prototypes[name]) {
        return this.prototypes[name].clone();
      }
      throw new Error(`Prototype with name ${name} not found`);
    }
  }
  
  // Concrete Prototypes
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
  
    clone() {
      throw new Error('clone method must be implemented');
    }
  }
  
  class Car extends Vehicle {
    constructor() {
      super('Car');
    }
  
    clone() {
      return new Car();
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor() {
      super('Motorcycle');
    }
  
    clone() {
      return new Motorcycle();
    }
  }
  
  // Client Code
  const registry = new PrototypeRegistry();
  registry.register('car', new Car());
  registry.register('motorcycle', new Motorcycle());
  
  const car = registry.create('car');
  console.log(car); // Car { type: 'Car' }
