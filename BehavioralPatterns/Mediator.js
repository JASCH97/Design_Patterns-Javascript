/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Mediator Design Pattern centralizes communication between objects by encapsulating interactions 
within a mediator object. This reduces direct connections between objects, promoting loose coupling 
and enabling easier maintenance and extensibility.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Mediator: This is the interface or abstract class that defines the methods for communication between 
colleagues (objects). It usually includes methods for registering, sending, and receiving messages.

Concrete Mediator: This is the class that implements the mediator interface. It manages the interactions 
and relationships between colleagues.

Colleague: These are the classes that communicate with each other through the mediator. They may not be 
directly aware of each other's existence.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Decoupling: The Mediator pattern reduces direct connections between objects, making the system more 
maintainable and extensible.

Centralized Control: Interactions are managed by a centralized mediator, simplifying the control and 
coordination of communication.

Promotes Reusability: Mediators can be reused to enable communication between different sets of colleagues.

*/

// ************************* Chat Room Example: *************************

// Mediator
class ChatMediator {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    sendMessage(message, sender) {
      this.users.forEach(user => {
        if (user !== sender) {
          user.receiveMessage(message);
        }
      });
    }
  }
  
  // Colleague
  class User {
    constructor(name, mediator) {
      this.name = name;
      this.mediator = mediator;
      this.mediator.addUser(this);
    }
  
    sendMessage(message) {
      console.log(`${this.name} sending message: ${message}`);
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  }
  
  // Client Code
  const mediator = new ChatMediator();
  
  const user1 = new User('Alice', mediator);
  const user2 = new User('Bob', mediator);
  
  user1.sendMessage('Hello, Bob!'); // Alice sending message: Hello, Bob!
  // Bob received message: Hello, Bob!
  
  user2.sendMessage('Hi, Alice!'); // Bob sending message: Hi, Alice!
  // Alice received message: Hi, Alice!

  // ************************* Aircraft Comunication Example: *************************

  // Mediator
class AirTrafficControl {
    constructor() {
      this.aircraft = [];
    }
  
    registerAircraft(aircraft) {
      this.aircraft.push(aircraft);
    }
  
    requestLanding(aircraft) {
      if (this.aircraft.includes(aircraft)) {
        console.log(`Landing granted for ${aircraft}`);
      } else {
        console.log(`Landing denied for ${aircraft}`);
      }
    }
  }
  
  // Colleague
  class Aircraft {
    constructor(name, trafficControl) {
      this.name = name;
      this.trafficControl = trafficControl;
      this.trafficControl.registerAircraft(this);
    }
  
    requestLanding() {
      console.log(`${this.name} requesting landing...`);
      this.trafficControl.requestLanding(this);
    }
  }
  
  // Client Code
  const controlTower = new AirTrafficControl();
  
  const aircraft1 = new Aircraft('Flight 123', controlTower);
  const aircraft2 = new Aircraft('Flight 456', controlTower);
  
  aircraft1.requestLanding(); // Flight 123 requesting landing...
  // Landing granted for Flight 123
  
  aircraft2.requestLanding(); // Flight 456 requesting landing...
  // Landing granted for Flight 456

