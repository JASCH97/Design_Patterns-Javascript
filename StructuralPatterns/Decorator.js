/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Decorator Design Pattern allows you to dynamically add behaviors or responsibilities to 
objects without altering their code. It involves creating a set of decorator classes that are 
used to wrap concrete components and provide additional functionality.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Component: This is the interface or abstract class that defines the methods that concrete 
components and decorators must implement. It represents the base object to which decorators 
can be added.

Concrete Component: This is the class that implements the component interface. It represents 
the core functionality that decorators can enhance.

Decorator: This is the abstract class that extends the component interface and maintains a 
reference to a component object. It has the same interface as the component and can add new 
responsibilities dynamically.

Concrete Decorator: These are the classes that extend the decorator interface and add specific 
behaviors or responsibilities to the component.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Flexibility: The Decorator pattern provides a flexible way to add or remove responsibilities 
from objects at runtime.

Composition: It promotes composition over inheritance, allowing you to combine different 
decorators to achieve complex behavior.

Single Responsibility Principle: The Decorator pattern helps in adhering to the Single 
Responsibility Principle by separating concerns into individual decorators.

*/


// ************************* UI Components Styling Example: *************************

  // Component
  class UIComponent {
    render() {
      return 'Basic UI Component';
    }
  }
  
  // Decorator
  class UIComponentDecorator {
    constructor(component) {
      this.component = component;
    }
  
    render() {
      return this.component.render();
    }
  }
  
  // Concrete Decorators
  class BorderDecorator extends UIComponentDecorator {
    render() {
      return `Border + ${this.component.render()}`;
    }
  }
  
  class ColorDecorator extends UIComponentDecorator {
    constructor(component, color) {
      super(component);
      this.color = color;
    }
  
    render() {
      return `Color(${this.color}) + ${this.component.render()}`;
    }
  }
  
  // Client Code
  const basicComponent = new UIComponent();
  console.log('Basic Component:', basicComponent.render());
  
  const borderedComponent = new BorderDecorator(basicComponent);
  console.log('Bordered Component:', borderedComponent.render());
  
  const coloredBorderedComponent = new ColorDecorator(borderedComponent, 'red');
  console.log('Colored Bordered Component:', coloredBorderedComponent.render());


  

// ************************* Coffe Shop Example: *************************

// Component
class Coffee {
    cost() {
      return 5;
    }
  }
  
  // Decorator
  class CoffeeDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost();
    }
  }
  
  // Concrete Decorators
  class MilkDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  class SugarDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  // Client Code
  const simpleCoffee = new Coffee();
  console.log('Simple Coffee Cost:', simpleCoffee.cost()); // 5
  
  const milkCoffee = new MilkDecorator(simpleCoffee);
  console.log('Milk Coffee Cost:', milkCoffee.cost()); // 7
  
  const sugarMilkCoffee = new SugarDecorator(milkCoffee);
  console.log('Sugar Milk Coffee Cost:', sugarMilkCoffee.cost()); // 8

