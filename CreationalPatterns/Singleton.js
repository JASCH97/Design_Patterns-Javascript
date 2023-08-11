/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Singleton design pattern ensures that a class has only one instance and provides a global 
point of access to that instance. It guarantees that a certain class has only a single instance 
throughout the application's lifecycle and provides a way to access that instance from any other 
part of the code. This pattern is often used to control the instantiation of resources that are 
shared across the application, such as a database connection, a configuration manager, or a 
logging service.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Singleton Class: This is the class that implements the Singleton pattern. It provides a method for 
obtaining the instance of the class and ensures that only one instance is created.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Single Instance: The Singleton pattern ensures that there is only one instance of the class throughout
 the application's lifetime.

Global Access: The Singleton instance can be accessed from anywhere in the application, providing a 
centralized point of control.
*/


// ************************* Default Example: *************************

const Singleton = (function () {
    let instance;
  
    function createInstance() {
      const object = new Object("I am the instance");
      return object;
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // Output: true




// ************************* Database Connection Example: *************************

  class DatabaseConnection {
    constructor(config) {
      if (DatabaseConnection.instance) {
        return DatabaseConnection.instance;
      }
      this.config = config;
      this.isConnected = false;
      // Simulating database connection here
      this.connect();
      DatabaseConnection.instance = this;
      return this;
    }
  
    connect() {
      // Simulate connecting to a database
      console.log('Connected to database:', this.config.databaseName);
      this.isConnected = true;
    }
  
    query(sql) {
      if (!this.isConnected) {
        console.log('Not connected to the database.');
        return;
      }
      console.log(`Executing query: ${sql}`);
      // Simulate query execution
    }
  }
  
  const dbConfig = {
    databaseName: 'mydb',
    host: 'localhost',
    user: 'username',
    password: 'password'
  };
  
  const dbConnection1 = new DatabaseConnection(dbConfig);
  dbConnection1.query('SELECT * FROM users');
  // Output: Connected to database: mydb
  //         Executing query: SELECT * FROM users
  
  const dbConnection2 = new DatabaseConnection(dbConfig); // Returns the existing instance
  dbConnection2.query('INSERT INTO orders ...');
  // Output: Executing query: INSERT INTO orders ...
  
  console.log(dbConnection1 === dbConnection2); // true



// ************************* Logger Example: *************************

class Logger {
    constructor() {
      if (Logger.instance) {
        return Logger.instance;
      }
      this.logs = [];
      Logger.instance = this;
      return this;
    }
  
    log(message) {
      this.logs.push(message);
      console.log(`Log: ${message}`);
    }
  
    displayLogs() {
      console.log('Logs:', this.logs);
    }
  }
  
  const logger1 = new Logger();
  logger1.log('Message 1');
  logger1.displayLogs(); // Logs: [ 'Message 1' ]
  
  const logger2 = new Logger(); // Returns the existing instance
  logger2.log('Message 2');
  logger1.displayLogs(); // Logs: [ 'Message 1', 'Message 2' ]