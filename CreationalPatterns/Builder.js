/*
- - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - - 
The Builder Design Pattern is a creational pattern that separates the construction of 
a complex object from its representation, allowing the same construction process to 
create different representations. It is useful when dealing with objects that have many 
optional components or configurations.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - - 
Builder Interface: This is the interface that defines the steps for building the product. 
It may include methods for adding components, setting attributes, etc.

Concrete Builder: This is the class that implements the builder interface. It contains the 
actual implementation of constructing the product.

Product: This is the complex object being constructed. It may have multiple parts or attributes 
that are set during the construction process.

Director: (Optional) In some implementations, a director class may be used to encapsulate the 
steps for constructing the product. It may use a specific builder to create the product.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Separation of Concerns: The Builder pattern separates the construction process from the representation, 
allowing for more control and flexibility.

Step-by-Step Construction: It allows for step-by-step construction of complex objects, making it easier 
to manage object creation with many optional components.
*/

// ************************* Meal Builder Example: *************************

class MealBuilder {
    constructor() {
      this.meal = new Meal();
    }
  
    addBurger(burger) {
      this.meal.burger = burger;
    }
  
    addFries(fries) {
      this.meal.fries = fries;
    }
  
    addDrink(drink) {
      this.meal.drink = drink;
    }
  
    getMeal() {
      return this.meal;
    }
  }
  
  class Meal {
    constructor() {
      this.burger = null;
      this.fries = null;
      this.drink = null;
    }
  
    display() {
      console.log('Burger:', this.burger);
      console.log('Fries:', this.fries);
      console.log('Drink:', this.drink);
    }
  }
  
  // Client code
  const burgerMealBuilder = new MealBuilder();
  burgerMealBuilder.addBurger('Cheeseburger');
  burgerMealBuilder.addFries('Curly Fries');
  
  const meal1 = burgerMealBuilder.getMeal();
  meal1.display();
  // Output:
  // Burger: Cheeseburger
  // Fries: Curly Fries
  // Drink: null
  
  const completeMealBuilder = new MealBuilder();
  completeMealBuilder.addBurger('Chicken Burger');
  completeMealBuilder.addFries('Regular Fries');
  completeMealBuilder.addDrink('Soda');
  
  const meal2 = completeMealBuilder.getMeal();
  meal2.display();
  // Output:
  // Burger: Chicken Burger
  // Fries: Regular Fries
  // Drink: Soda
