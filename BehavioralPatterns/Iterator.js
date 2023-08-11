/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Iterator Design Pattern provides a way to access elements of a collection sequentially 
without exposing the underlying representation of the collection. It separates the concerns 
of accessing elements from the details of how the elements are stored or organized.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Iterator: This is the interface or abstract class that defines the methods for traversing the 
elements of a collection. It typically includes methods like next, hasNext, etc.

Concrete Iterator: These are the classes that implement the iterator interface. They provide 
the specific implementation for traversing a particular collection.

Aggregate: This is the interface or abstract class that defines methods for creating iterators. 
It may also include methods for adding and accessing elements.

Concrete Aggregate: These are the classes that implement the aggregate interface. They provide 
the actual collection of elements and create the corresponding iterators.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Encapsulation: The Iterator pattern encapsulates the details of traversing a collection, allowing 
clients to focus on accessing elements without knowing the internal structure.

Flexibility: It allows for different implementations of iteration, enabling the use of different 
traversal algorithms or custom behaviors.

Separation of Concerns: The Iterator pattern separates the concerns of accessing elements from 
the concerns of the collection itself, promoting a cleaner and more maintainable design.

*/

// ************************* Collection Example: *************************

class MyCollection {
    constructor() {
      this.items = [];
    }
    
    addItem(item) {
      this.items.push(item);
    }
    
    createIterator() {
      return new MyIterator(this.items);
    }
  }
  
  class MyIterator {
    constructor(items) {
      this.items = items;
      this.index = 0;
    }
    
    hasNext() {
      return this.index < this.items.length;
    }
    
    next() {
      if (this.hasNext()) {
        return this.items[this.index++];
      }
      return null;
    }
  }
  
  // Usage
  const myCollection = new MyCollection();
  myCollection.addItem("Item 1");
  myCollection.addItem("Item 2");
  myCollection.addItem("Item 3");
  
  const myCollectionIterator = myCollection.createIterator();
  while (myCollectionIterator.hasNext()) {
    console.log(myCollectionIterator.next());
  }


// ************************* Array Example: *************************

// Iterator
class Iterator {
    constructor(items) {
      this.items = items;
      this.index = 0;
    }
  
    next() {
      return this.items[this.index++];
    }
  
    hasNext() {
      return this.index < this.items.length;
    }
  }
  
  // Aggregate
  class IterableCollection {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    createIterator() {
      return new Iterator(this.items);
    }
  }
  
  // Client Code
  const collection = new IterableCollection();
  collection.addItem('Item 1');
  collection.addItem('Item 2');
  collection.addItem('Item 3');
  
  const iterator = collection.createIterator();
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  // Output:
  // Item 1
  // Item 2
  // Item 3

