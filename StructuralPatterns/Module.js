/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Module Design Pattern is used to encapsulate and organize code into separate modules with 
private and public access to variables and functions. It helps manage code structure, minimize 
global namespace pollution, and promote better code organization.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Module: A self-contained unit of code that can encapsulate related variables, functions, or 
objects. It may have private members (not accessible from outside) and public members 
(accessible from outside).

Private Members: Variables or functions that are not directly accessible from outside the 
module, helping to prevent unintended modifications or access.

Public Members: Variables or functions that are exposed and accessible from outside the 
module, serving as the module's public interface.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Encapsulation: The Module pattern encapsulates code, reducing the risk of naming collisions and 
promoting better code organization.

Privacy: Private members can't be accessed from outside, preventing unintended interference or
modification.

Reusability: Modules can be reused in different parts of the application, promoting code reuse 
and maintainability.

*/

// ************************* Basic Module Example: *************************

const MyModule = (function() {
    // Private members
    let privateVar = 'I am private';
  
    function privateFunction() {
      console.log(privateVar);
    }
  
    // Public members
    return {
      publicVar: 'I am public',
      publicFunction: function() {
        console.log(this.publicVar);
      }
    };
  })();
  
  console.log(MyModule.publicVar); // Accessing publicVar
  MyModule.publicFunction(); // Calling publicFunction



  // ************************* Revealing Module Example: *************************

  const CounterModule = (function() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    function decrement() {
      count--;
    }
  
    function getCount() {
      return count;
    }
  
    // Exposing public members
    return {
      increment: increment,
      decrement: decrement,
      getCount: getCount
    };
  })();
  
  CounterModule.increment();
  CounterModule.increment();
  CounterModule.decrement();
  console.log(CounterModule.getCount()); // Output: 1


  
  // ************************* Namespace Module Example: *************************

  const MyNamespace = (function() {
    function privateFunction() {
      console.log("This is a private function.");
    }
    
    return {
      publicFunction1: function() {
        console.log("Public function 1.");
      },
      
      publicFunction2: function() {
        console.log("Public function 2.");
      }
    };
  })();
  
  // Usage
  MyNamespace.publicFunction1();
  MyNamespace.publicFunction2();