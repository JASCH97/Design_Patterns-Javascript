/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Proxy Design Pattern provides a surrogate or placeholder for another object to control 
access to it. It adds an additional layer of indirection to manage the interactions between 
clients and real subjects, allowing for additional behaviors, caching, or security checks.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Subject: This is the interface or abstract class that defines the common methods for both the 
real subject and the proxy. It's the contract that clients use to interact with the subject.

Real Subject: This is the class that implements the subject interface. It represents the actual 
object that the proxy stands in for.

Proxy: This is the class that implements the subject interface and maintains a reference to the 
real subject. It controls access to the real subject and can add additional functionality.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Control: Proxies can control access to the real subject, enabling various levels of access, 
caching, or security checks.

Lazy Initialization: Proxies can defer the creation or initialization of the real subject 
until it's actually needed.

Modularity: Proxies separate the client code from the details of object creation and management.

*/

// ************************* Virtual Proxy -> Image Loading Example: *************************

// Subject
class Image {
    constructor(filename) {
      this.filename = filename;
      this.loadImage();
    }
  
    loadImage() {
      console.log(`Loading image: ${this.filename}`);
    }
  
    display() {
      console.log(`Displaying image: ${this.filename}`);
    }
  }
  
  // Proxy
  class ImageProxy {
    constructor(filename) {
      this.filename = filename;
      this.image = null;
    }
  
    display() {
      if (!this.image) {
        this.image = new Image(this.filename);
      }
      this.image.display();
    }
  }
  
  // Client Code
  const imageProxy = new ImageProxy('nature.jpg');
  
  // Image is not loaded until display is called
  imageProxy.display();



  // ************************* Protection Proxy -> Acces Control Example: *************************

// Subject
class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    getBalance() {
      return this.balance;
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}`);
      } else {
        console.log('Insufficient balance');
      }
    }
  }
  
  // Proxy
  class BankAccountProxy {
    constructor(realAccount) {
      this.realAccount = realAccount;
    }
  
    getBalance() {
      return this.realAccount.getBalance();
    }
  
    withdraw(amount) {
      if (amount <= 1000) {
        this.realAccount.withdraw(amount);
      } else {
        console.log('Withdrawal limit exceeded');
      }
    }
  }
  
  // Client Code
  const realAccount = new BankAccount(2000);
  const accountProxy = new BankAccountProxy(realAccount);
  
  console.log('Account Balance:', accountProxy.getBalance()); // Account Balance: 2000
  accountProxy.withdraw(800); // Withdrew $800
  accountProxy.withdraw(1500); // Withdrawal limit exceeded  
