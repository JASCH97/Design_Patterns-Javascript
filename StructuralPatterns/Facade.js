/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Facade Design Pattern provides a simplified interface to a complex system of classes, 
making it easier for clients to interact with the system. It acts as a higher-level interface 
that hides the complexities of the underlying components.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Facade: This is the class that provides a simplified interface to the client. It delegates 
requests to the appropriate subsystem components and manages their interactions.

Subsystems: These are the classes or modules that implement the complex functionality. The 
Facade delegates calls to these subsystems to perform specific tasks.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Simplicity: The Facade pattern simplifies the usage of a complex system by providing a high-level 
interface that encapsulates its details.

Decoupling: It decouples clients from the complexity of subsystems, reducing dependencies and 
promoting modular design.

Abstraction: The Facade promotes an abstraction layer that shields clients from the internal
workings of the system.

*/

// ************************* Home Theater System Example: *************************

// Subsystems
class DVDPlayer {
    on() { console.log('DVD Player is on'); }
    play(movie) { console.log(`Playing movie: ${movie}`); }
    off() { console.log('DVD Player is off'); }
  }
  
  class SoundSystem {
    on() { console.log('Sound System is on'); }
    setVolume(volume) { console.log(`Setting volume to ${volume}`); }
    off() { console.log('Sound System is off'); }
  }
  
  class Projector {
    on() { console.log('Projector is on'); }
    setInput(input) { console.log(`Setting input to ${input}`); }
    off() { console.log('Projector is off'); }
  }
  
  // Facade
  class HomeTheaterFacade {
    constructor(dvdPlayer, soundSystem, projector) {
      this.dvdPlayer = dvdPlayer;
      this.soundSystem = soundSystem;
      this.projector = projector;
    }
  
    watchMovie(movie) {
      console.log('Get ready to watch a movie...');
      this.projector.on();
      this.projector.setInput('DVD');
      this.soundSystem.on();
      this.soundSystem.setVolume(10);
      this.dvdPlayer.on();
      this.dvdPlayer.play(movie);
    }
  
    endMovie() {
      console.log('Shutting down the theater...');
      this.dvdPlayer.off();
      this.soundSystem.off();
      this.projector.off();
    }
  }
  
  // Client Code
  const dvdPlayer = new DVDPlayer();
  const soundSystem = new SoundSystem();
  const projector = new Projector();
  
  const homeTheater = new HomeTheaterFacade(dvdPlayer, soundSystem, projector);
  
  homeTheater.watchMovie('Inception');
  homeTheater.endMovie();




  // ************************* Online Shopping Example: *************************

// Subsystems
class InventorySystem {
    checkStock(item) { console.log(`Checking stock for ${item}`); }
    reserve(item) { console.log(`Reserving ${item}`); }
  }
  
  class PaymentGateway {
    processPayment(amount) { console.log(`Processing payment of $${amount}`); }
  }
  
  class ShippingService {
    ship(item) { console.log(`Shipping ${item}`); }
  }
  
  // Facade
  class OnlineShoppingFacade {
    constructor(inventory, payment, shipping) {
      this.inventory = inventory;
      this.payment = payment;
      this.shipping = shipping;
    }
  
    purchase(item, amount) {
      console.log('Initiating online shopping...');
      this.inventory.checkStock(item);
      this.inventory.reserve(item);
      this.payment.processPayment(amount);
      this.shipping.ship(item);
      console.log(`Successfully purchased ${item} for $${amount}`);
    }
  }
  
  // Client Code
  const inventory = new InventorySystem();
  const payment = new PaymentGateway();
  const shipping = new ShippingService();
  
  const onlineShopping = new OnlineShoppingFacade(inventory, payment, shipping);
  
  onlineShopping.purchase('Smartphone', 500);