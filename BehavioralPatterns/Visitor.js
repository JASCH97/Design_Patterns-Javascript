/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Visitor Design Pattern allows you to add new behaviors or operations to a set of classes 
without modifying their structure. It achieves this by defining a separate visitor interface 
with methods for each class, and concrete visitor classes that implement those methods to 
perform specific operations on the elements.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Visitor: This is the interface or abstract class that defines the visit methods for each 
element class. Each visit method takes an element as a parameter and performs a specific operation on it.

Concrete Visitor: These are the classes that implement the visitor interface. They provide 
the actual implementation of the visit methods for each element class.

Element: This is the interface or abstract class that defines an accept method that takes a 
visitor as a parameter. Each concrete element class implements this method to call the appropriate 
visit method on the visitor.

Concrete Element: These are the classes that implement the element interface. They define their 
own accept methods, which call the corresponding visit method on the visitor.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Open-Closed Principle: The Visitor pattern allows you to add new operations or behaviors to a 
set of classes without modifying their code, promoting the open-closed principle.

Separation of Concerns: It separates the concerns of the operations from the structure of the 
classes being operated on.

Maintainability: The Visitor pattern simplifies the addition of new operations, making the 
codebase easier to maintain and extend.

*/

// ************************* Document Structure Example: *************************

// Visitor
class Visitor {
    visitText(text) {
      throw new Error('visitText method must be implemented');
    }
  
    visitImage(image) {
      throw new Error('visitImage method must be implemented');
    }
  }
  
  // Concrete Visitors
  class HTMLExportVisitor extends Visitor {
    visitText(text) {
      return `<p>${text.content}</p>`;
    }
  
    visitImage(image) {
      return `<img src="${image.url}" alt="${image.caption}" />`;
    }
  }
  
  class MarkdownExportVisitor extends Visitor {
    visitText(text) {
      return text.content;
    }
  
    visitImage(image) {
      return `![${image.caption}](${image.url})`;
    }
  }
  
  // Element
  class Element {
    accept(visitor) {
      throw new Error('accept method must be implemented');
    }
  }
  
  // Concrete Elements
  class TextElement extends Element {
    constructor(content) {
      super();
      this.content = content;
    }
  
    accept(visitor) {
      return visitor.visitText(this);
    }
  }
  
  class ImageElement extends Element {
    constructor(url, caption) {
      super();
      this.url = url;
      this.caption = caption;
    }
  
    accept(visitor) {
      return visitor.visitImage(this);
    }
  }
  
  // Client Code
  const document = [
    new TextElement('This is a paragraph.'),
    new ImageElement('image.jpg', 'A beautiful sunset'),
  ];
  
  const htmlExporter = new HTMLExportVisitor();
  const markdownExporter = new MarkdownExportVisitor();
  
  const htmlOutput = document.map(element => element.accept(htmlExporter)).join('\n');
  console.log(htmlOutput);
  
  const markdownOutput = document.map(element => element.accept(markdownExporter)).join('\n');
  console.log(markdownOutput);



// ************************* Shapes Area Calculation Example: *************************

// Visitor
class Visitor {
    visitCircle(circle) {
      throw new Error('visitCircle method must be implemented');
    }
  
    visitRectangle(rectangle) {
      throw new Error('visitRectangle method must be implemented');
    }
  }
  
  // Concrete Visitors
  class AreaCalculatorVisitor extends Visitor {
    visitCircle(circle) {
      return Math.PI * Math.pow(circle.radius, 2);
    }
  
    visitRectangle(rectangle) {
      return rectangle.width * rectangle.height;
    }
  }
  
  // Element
  class Shape {
    accept(visitor) {
      throw new Error('accept method must be implemented');
    }
  }
  
  // Concrete Elements
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    accept(visitor) {
      return visitor.visitCircle(this);
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    accept(visitor) {
      return visitor.visitRectangle(this);
    }
  }
  
  // Client Code
  const shapes = [new Circle(5), new Rectangle(4, 6)];
  
  const areaCalculator = new AreaCalculatorVisitor();
  
  const totalArea = shapes.reduce((total, shape) => total + shape.accept(areaCalculator), 0);
  console.log('Total Area:', totalArea);
