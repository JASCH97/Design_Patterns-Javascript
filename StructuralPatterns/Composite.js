/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Composite Design Pattern composes objects into tree structures to represent part-whole 
hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. 
This pattern is suitable for scenarios where you need to represent a hierarchy of objects in a 
consistent manner.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Component: This is the interface or abstract class that defines the common methods for both leaf 
objects and composites. It allows clients to treat individual objects and compositions uniformly.

Leaf: These are the individual objects that don't have any children. They implement the component 
interface and perform specific actions.

Composite: These are the classes that have child components. They implement the component interface 
and can hold and manage child components.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Hierarchy Representation: The Composite pattern helps in representing part-whole hierarchies of 
objects in a unified way.

Consistency: Clients can treat individual objects and compositions uniformly, promoting consistent usage.

Flexibility: It allows you to add new leaf or composite classes without changing the client code.

*/

// ************************* Directory Structure Example: *************************

// Component
class FileSystemNode {
    constructor(name) {
      this.name = name;
    }
  
    display() {
      throw new Error('display method must be implemented');
    }
  }
  
  // Leaf
  class File extends FileSystemNode {
    display() {
      console.log(`File: ${this.name}`);
    }
  }
  
  // Composite
  class Directory extends FileSystemNode {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    add(node) {
      this.children.push(node);
    }
  
    remove(node) {
      const index = this.children.indexOf(node);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    display() {
      console.log(`Directory: ${this.name}`);
      this.children.forEach(child => child.display());
    }
  }
  
  // Client Code
  const root = new Directory('root');
  const dir1 = new Directory('dir1');
  const dir2 = new Directory('dir2');
  
  const file1 = new File('file1.txt');
  const file2 = new File('file2.txt');
  
  root.add(dir1);
  root.add(file1);
  root.add(file2);
  dir1.add(dir2);
  
  root.display();


// ************************* Graphic Objects Example: *************************

// Component
class Graphic {
    draw() {
      throw new Error('draw method must be implemented');
    }
  }
  
  // Leaf
  class Line extends Graphic {
    draw() {
      console.log('Drawing Line');
    }
  }
  
  class Circle extends Graphic {
    draw() {
      console.log('Drawing Circle');
    }
  }
  
  // Composite
  class Picture extends Graphic {
    constructor() {
      super();
      this.graphics = [];
    }
  
    add(graphic) {
      this.graphics.push(graphic);
    }
  
    remove(graphic) {
      const index = this.graphics.indexOf(graphic);
      if (index !== -1) {
        this.graphics.splice(index, 1);
      }
    }
  
    draw() {
      console.log('Drawing Picture:');
      this.graphics.forEach(graphic => graphic.draw());
    }
  }
  
  // Client Code
  const line = new Line();
  const circle = new Circle();
  const picture = new Picture();
  
  picture.add(line);
  picture.add(circle);
  
  picture.draw();




