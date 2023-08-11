/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Strategy Design Pattern defines a family of interchangeable algorithms and allows clients 
to select and use a specific algorithm without knowing its internal details. It promotes 
encapsulation, flexibility, and the ability to switch between different algorithms at runtime.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Strategy: This is the interface or abstract class that defines the contract for all concrete 
strategies. It declares the method(s) that concrete strategies must implement.

Concrete Strategy: These are the classes that implement the strategy interface. They provide 
specific algorithm implementations that can be used interchangeably.

Context: This is the class that maintains a reference to a strategy object and uses it to 
perform an operation. It may have methods to set or switch strategies.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Flexibility: The Strategy pattern allows easy swapping of algorithms, making it suitable for 
scenarios where different variations of an algorithm are required.

Encapsulation: Algorithms are encapsulated within separate strategy classes, promoting modular 
design and maintainability.

Reusability: Strategies can be reused across different contexts or applications.

*/

// ************************* Payment Strategies Example: *************************

// Strategy
class PaymentStrategy {
    pay(amount) {
      throw new Error('pay method must be implemented');
    }
  }
  
  // Concrete Strategies
  class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid $${amount} via Credit Card`);
    }
  }
  
  class PayPalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid $${amount} via PayPal`);
    }
  }
  
  class BankTransferPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid $${amount} via Bank Transfer`);
    }
  }
  
  // Context
  class ShoppingCart {
    constructor(paymentStrategy) {
      this.items = [];
      this.paymentStrategy = paymentStrategy;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    checkout() {
      const totalAmount = this.calculateTotalAmount();
      this.paymentStrategy.pay(totalAmount);
    }
  
    calculateTotalAmount() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }
  
  // Client Code
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();
  
  const cart1 = new ShoppingCart(creditCardPayment);
  cart1.addItem({ name: 'Item 1', price: 50 });
  cart1.addItem({ name: 'Item 2', price: 30 });
  cart1.checkout(); // Paid $80 via Credit Card
  
  const cart2 = new ShoppingCart(payPalPayment);
  cart2.addItem({ name: 'Item 3', price: 25 });
  cart2.addItem({ name: 'Item 4', price: 40 });
  cart2.checkout(); // Paid $65 via PayPal



  
  // ************************* Sorting Algorithms Example: *************************

  // Strategy
class SortingStrategy {
    sort(array) {
      throw new Error('sort method must be implemented');
    }
  }
  
  // Concrete Strategies
  class BubbleSort extends SortingStrategy {
    sort(array) {
      console.log('Sorting array using Bubble Sort');
      // Bubble sort implementation
      return array;
    }
  }
  
  class QuickSort extends SortingStrategy {
    sort(array) {
      console.log('Sorting array using Quick Sort');
      // Quick sort implementation
      return array;
    }
  }
  
  class MergeSort extends SortingStrategy {
    sort(array) {
      console.log('Sorting array using Merge Sort');
      // Merge sort implementation
      return array;
    }
  }
  
  // Context
  class Sorter {
    constructor(sortingStrategy) {
      this.sortingStrategy = sortingStrategy;
    }
  
    sort(array) {
      return this.sortingStrategy.sort(array);
    }
  }
  
  // Client Code
  const bubbleSort = new BubbleSort();
  const quickSort = new QuickSort();
  
  const sorter1 = new Sorter(bubbleSort);
  const sortedArray1 = sorter1.sort([5, 2, 9, 1, 5]);
  console.log(sortedArray1);
  
  const sorter2 = new Sorter(quickSort);
  const sortedArray2 = sorter2.sort([8, 3, 7, 2, 6]);
  console.log(sortedArray2);