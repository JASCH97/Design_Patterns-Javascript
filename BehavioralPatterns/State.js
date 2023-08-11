/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The State Design Pattern allows an object to change its behavior when its internal state changes. 
It achieves this by encapsulating the different states of an object into separate classes, enabling 
the object to dynamically change its behavior based on its current state.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
State: This is the interface or abstract class that defines the methods for different states. 
Each concrete state class implements these methods to provide specific behavior for that state.

Concrete State: These are the classes that implement the state interface. They encapsulate the
 behavior associated with a specific state.

Context: This is the class that contains a reference to the current state object. It delegates 
requests to the current state and manages state transitions.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Flexibility: The State pattern allows objects to change their behavior without changing their 
structure, promoting flexibility and extensibility.

Cleaner Code: It separates the behavior of an object based on its state, leading to cleaner 
and more maintainable code.

Encapsulation: State-specific behavior is encapsulated within state classes, reducing code 
duplication and promoting modular design.

*/

// ************************* Traffic Light Example: *************************

// State
class TrafficLightState {
    constructor(light) {
      this.light = light;
    }
  
    change() {
      throw new Error('change method must be implemented');
    }
  }
  
  // Concrete States
  class RedLight extends TrafficLightState {
    change() {
      console.log('Changing light to green');
      this.light.setState(this.light.greenLight);
    }
  }
  
  class GreenLight extends TrafficLightState {
    change() {
      console.log('Changing light to yellow');
      this.light.setState(this.light.yellowLight);
    }
  }
  
  class YellowLight extends TrafficLightState {
    change() {
      console.log('Changing light to red');
      this.light.setState(this.light.redLight);
    }
  }
  
  // Context
  class TrafficLight {
    constructor() {
      this.redLight = new RedLight(this);
      this.greenLight = new GreenLight(this);
      this.yellowLight = new YellowLight(this);
      this.currentState = this.redLight;
    }
  
    setState(state) {
      this.currentState = state;
    }
  
    change() {
      this.currentState.change();
    }
  }
  
  // Client Code
  const trafficLight = new TrafficLight();
  trafficLight.change(); // Changing light to green
  trafficLight.change(); // Changing light to yellow
  trafficLight.change(); // Changing light to red



  
  // ************************* Fan Speed Example: *************************

// State
class FanState {
    constructor(fan) {
      this.fan = fan;
    }
  
    increaseSpeed() {
      throw new Error('increaseSpeed method must be implemented');
    }
  
    decreaseSpeed() {
      throw new Error('decreaseSpeed method must be implemented');
    }
  }
  
  // Concrete States
  class OffState extends FanState {
    increaseSpeed() {
      console.log('Increasing fan speed to low');
      this.fan.setState(this.fan.lowState);
    }
  
    decreaseSpeed() {
      // No action when fan is off
    }
  }
  
  class LowState extends FanState {
    increaseSpeed() {
      console.log('Increasing fan speed to medium');
      this.fan.setState(this.fan.mediumState);
    }
  
    decreaseSpeed() {
      console.log('Decreasing fan speed to off');
      this.fan.setState(this.fan.offState);
    }
  }
  
  class MediumState extends FanState {
    increaseSpeed() {
      console.log('Increasing fan speed to high');
      this.fan.setState(this.fan.highState);
    }
  
    decreaseSpeed() {
      console.log('Decreasing fan speed to low');
      this.fan.setState(this.fan.lowState);
    }
  }
  
  class HighState extends FanState {
    increaseSpeed() {
      // No action when fan is already at high speed
    }
  
    decreaseSpeed() {
      console.log('Decreasing fan speed to medium');
      this.fan.setState(this.fan.mediumState);
    }
  }
  
  // Context
  class Fan {
    constructor() {
      this.offState = new OffState(this);
      this.lowState = new LowState(this);
      this.mediumState = new MediumState(this);
      this.highState = new HighState(this);
      this.currentState = this.offState;
    }
  
    setState(state) {
      this.currentState = state;
    }
  
    increaseSpeed() {
      this.currentState.increaseSpeed();
    }
  
    decreaseSpeed() {
      this.currentState.decreaseSpeed();
    }
  }
  
  // Client Code
  const fan = new Fan();
  fan.increaseSpeed(); // Increasing fan speed to low
  fan.increaseSpeed(); // Increasing fan speed to medium
  fan.decreaseSpeed(); // Decreasing fan speed to low
  fan.decreaseSpeed(); // Decreasing fan speed to off  