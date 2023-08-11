/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Observer Design Pattern defines a one-to-many dependency between objects, so that when one 
object (subject) changes state, all its dependents (observers) are notified and updated automatically.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Subject: This is the object that maintains a list of its dependents (observers) and notifies 
them of any changes in its state.

Observer: This is the interface or abstract class that defines the update method, which is 
called by the subject to notify the observer of a state change.

Concrete Observer: These are the classes that implement the observer interface. They register 
themselves with a subject and receive updates when the subject's state changes.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Loose Coupling: The Observer pattern promotes loose coupling between objects, allowing changes 
in one object to trigger updates in others without direct dependencies.

Reusability: Observers can be reused and added or removed dynamically to adapt to changing requirements.

Modularity: Objects can be divided into smaller, more manageable components that communicate 
through the observer pattern.

*/

// ************************* Stock Price Example: *************************

// Observer
class Observer {
    update(stockName, price) {
      throw new Error('update method must be implemented');
    }
  }
  
  // Concrete Observers
  class StockMarketDisplay extends Observer {
    constructor() {
      super();
      this.stocks = {};
    }
  
    update(stockName, price) {
      this.stocks[stockName] = price;
      console.log(`Stocks:`, this.stocks);
    }
  }
  
  class NewsFeed extends Observer {
    update(stockName, price) {
      console.log(`Breaking News: ${stockName} price is ${price}`);
    }
  }
  
  // Subject
  class StockMarket {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(stockName, price) {
      this.observers.forEach(observer => observer.update(stockName, price));
    }
  
    setStockPrice(stockName, price) {
      this.notifyObservers(stockName, price);
    }
  }
  
  // Client Code
  const stockMarket = new StockMarket();
  const display = new StockMarketDisplay();
  const newsFeed = new NewsFeed();
  
  stockMarket.addObserver(display);
  stockMarket.addObserver(newsFeed);
  
  stockMarket.setStockPrice('AAPL', 150);
  stockMarket.setStockPrice('GOOG', 2800);



  // ************************* Weather Station Example: *************************

  // Observer
class Observer {
    update(temperature) {
      throw new Error('update method must be implemented');
    }
  }
  
  // Concrete Observers
  class TemperatureDisplay extends Observer {
    update(temperature) {
      console.log(`Current temperature: ${temperature}°C`);
    }
  }
  
  class MobileApp extends Observer {
    update(temperature) {
      console.log(`Mobile app notification: Temperature is ${temperature}°C`);
    }
  }
  
  // Subject
  class WeatherStation {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(temperature) {
      this.observers.forEach(observer => observer.update(temperature));
    }
  
    setTemperature(temperature) {
      this.notifyObservers(temperature);
    }
  }
  
  // Client Code
  const weatherStation = new WeatherStation();
  const tempDisplay = new TemperatureDisplay();
  const mobileApp = new MobileApp();
  
  weatherStation.addObserver(tempDisplay);
  weatherStation.addObserver(mobileApp);
  
  weatherStation.setTemperature(25);
  weatherStation.setTemperature(30);

