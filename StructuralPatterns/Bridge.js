/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Bridge Design Pattern decouples an abstraction from its implementation, allowing both to 
vary independently. It involves creating two separate hierarchies: one for abstractions and 
another for implementations. This pattern is particularly useful when dealing with multiple 
dimensions of variability.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Abstraction: This is the high-level interface or abstract class that defines the methods or 
properties that the client uses. It contains a reference to the implementation.

Refined Abstraction: This is a subclass of the abstraction that further extends or enhances 
the interface defined by the abstraction.

Implementation: This is the interface or abstract class that defines the methods or properties 
that the concrete implementations must implement.

Concrete Implementation: These are the classes that implement the implementation interface. 
They provide the actual functionality or behavior.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Decoupling: The Bridge pattern promotes loose coupling between abstractions and implementations, 
allowing them to evolve independently.

Flexibility: It allows you to change abstractions or implementations without affecting each other, 
providing more flexibility in design.

Complexity Management: The Bridge pattern helps manage complex hierarchies by separating concerns 
and promoting modular design.

*/

// ************************* Remote Controls and Devices Example: *************************

// Implementation
class Device {
    constructor() {
      this.status = false;
    }
  
    isEnabled() {
      return this.status;
    }
  
    enable() {
      this.status = true;
    }
  
    disable() {
      this.status = false;
    }
  }
  
  class TV extends Device {
    constructor() {
      super();
      this.channel = 1;
    }
  
    setChannel(channel) {
      this.channel = channel;
      console.log(`TV channel set to ${channel}`);
    }
  }
  
  class Radio extends Device {
    constructor() {
      super();
      this.frequency = 90.0;
    }
  
    setFrequency(frequency) {
      this.frequency = frequency;
      console.log(`Radio frequency set to ${frequency}`);
    }
  }
  
  // Abstraction
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    togglePower() {
      if (this.device.isEnabled()) {
        this.device.disable();
        console.log('Power OFF');
      } else {
        this.device.enable();
        console.log('Power ON');
      }
    }
  }
  
  // Refined Abstraction
  class AdvancedRemoteControl extends RemoteControl {
    setChannel(channel) {
      this.device.setChannel(channel);
    }
  }
  
  // Client Code
  const tv = new TV();
  const radio = new Radio();
  
  const remote = new RemoteControl(tv);
  const advancedRemote = new AdvancedRemoteControl(radio);
  
  remote.togglePower(); // Power ON
  advancedRemote.togglePower(); // Power ON
  
  advancedRemote.setChannel(5); // TV channel set to 5




// ************************* Shape Drawing Example: *************************

// Implementation
class DrawingAPI {
    drawCircle(x, y, radius) {
      throw new Error('drawCircle method must be implemented');
    }
  }
  
  class SVGDrawingAPI extends DrawingAPI {
    drawCircle(x, y, radius) {
      console.log(`Drawing SVG circle at (${x},${y}) with radius ${radius}`);
    }
  }
  
  class CanvasDrawingAPI extends DrawingAPI {
    drawCircle(x, y, radius) {
      console.log(`Drawing canvas circle at (${x},${y}) with radius ${radius}`);
    }
  }
  
  // Abstraction
  class Shape {
    constructor(drawingAPI) {
      this.drawingAPI = drawingAPI;
    }
  
    draw() {
      throw new Error('draw method must be implemented');
    }
  }
  
  // Refined Abstraction
  class CircleShape extends Shape {
    constructor(x, y, radius, drawingAPI) {
      super(drawingAPI);
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    draw() {
      this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
  }
  
  // Client Code
  const svgDrawingAPI = new SVGDrawingAPI();
  const canvasDrawingAPI = new CanvasDrawingAPI();
  
  const circleShape1 = new CircleShape(10, 10, 5, svgDrawingAPI);
  const circleShape2 = new CircleShape(20, 20, 10, canvasDrawingAPI);
  
  circleShape1.draw(); // Drawing SVG circle at (10,10) with radius 5
  circleShape2.draw(); // Drawing canvas circle at (20,20) with radius 10




