/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Command Design Pattern encapsulates a request as an object, allowing for parameterizing 
clients with different requests, queueing or logging requests, and providing undoable operations.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Command: This is the abstract base class or interface that defines the execute method that 
concrete command classes must implement. It encapsulates a request along with its parameters.

Concrete Command: These are the classes that implement the command interface. They encapsulate 
a specific action along with the necessary data to perform the action.

Invoker: This is the class that holds a reference to a command object and triggers the execution 
of the command.

Receiver: This is the class that performs the actual action requested by the command.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Decoupling: The Command pattern decouples the sender of a request from its receiver, allowing 
for greater flexibility and extensibility.

Undo/Redo: Command objects can keep track of their state, enabling the implementation of undoable
 and redoable operations.

Logging and Queuing: Commands can be logged, queued, or scheduled, enabling advanced features like 
logging requests, transaction management, and more.

*/

// ************************* Light Switch Example: *************************

// Command
class Command {
    execute() {
      throw new Error('execute method must be implemented');
    }
  }
  
  // Concrete Commands
  class LightOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class LightOffCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  // Receiver
  class Light {
    turnOn() {
      console.log('Light is ON');
    }
  
    turnOff() {
      console.log('Light is OFF');
    }
  }
  
  // Invoker
  class RemoteControl {
    constructor() {
      this.command = null;
    }
  
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }
  
  // Client Code
  const light = new Light();
  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);
  
  const remote = new RemoteControl();
  
  remote.setCommand(lightOn);
  remote.pressButton(); // Light is ON
  
  remote.setCommand(lightOff);
  remote.pressButton(); // Light is OFF


// ************************* Drawing Application Example: *************************

// Command
class DrawingCommand {
    constructor(drawing, x, y) {
      this.drawing = drawing;
      this.x = x;
      this.y = y;
    }
  
    execute() {
      throw new Error('execute method must be implemented');
    }
  }
  
  // Concrete Commands
  class DrawCircleCommand extends DrawingCommand {
    execute() {
      this.drawing.drawCircle(this.x, this.y);
    }
  }
  
  class DrawRectangleCommand extends DrawingCommand {
    execute() {
      this.drawing.drawRectangle(this.x, this.y);
    }
  }
  
  // Receiver
  class Drawing {
    drawCircle(x, y) {
      console.log(`Drawing circle at (${x}, ${y})`);
    }
  
    drawRectangle(x, y) {
      console.log(`Drawing rectangle at (${x}, ${y})`);
    }
  }
  
  // Invoker
  class User {
    constructor() {
      this.commands = [];
    }
  
    execute(command) {
      this.commands.push(command);
      command.execute();
    }
  
    undo() {
      const lastCommand = this.commands.pop();
      if (lastCommand) {
        console.log('Undoing last command');
      }
    }
  }
  
  // Client Code
  const drawing = new Drawing();
  const user = new User();
  
  const drawCircle = new DrawCircleCommand(drawing, 10, 20);
  const drawRectangle = new DrawRectangleCommand(drawing, 30, 40);
  
  user.execute(drawCircle); // Drawing circle at (10, 20)
  user.execute(drawRectangle); // Drawing rectangle at (30, 40)
  
  user.undo(); // Undoing last command

