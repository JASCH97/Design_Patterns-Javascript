/*
- - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - - 
The Object Pool Design Pattern is manages a pool of reusable objects, allowing clients to 
"check out" and "return" objects from the pool as needed. It's particularly useful when the 
creation and destruction of objects are resource-intensive, and you want to  minimize the 
overhead of creating new objects by reusing existing ones.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - - 
Object Pool: This is the main class that manages a pool of objects. It provides methods to 
acquire and release objects from the pool.

Object: These are the objects that are pooled and reused. They are typically pre-allocated and initialized.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Performance Improvement: The Object Pool pattern reduces the overhead of object creation and 
destruction, which can lead to better performance and resource utilization.

Resource Management: It allows for better management of limited resources, such as database 
connections or network sockets.

Reuse: Objects are reused from the pool, leading to fewer instances being created and reduced memory usage.
*/

// ************************* Database Connection Example: *************************

class DatabaseConnection {
    constructor() {
      console.log('Creating a new database connection');
      // Simulate the connection creation process
    }
  
    query(sql) {
      console.log(`Executing query: ${sql}`);
      // Simulate query execution
    }
  
    close() {
      console.log('Closing database connection');
      // Simulate connection closing
    }
  }
  
  class ObjectPool {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.pool = [];
    }
  
    acquire() {
      if (this.pool.length === 0) {
        return new DatabaseConnection();
      }
      return this.pool.pop();
    }
  
    release(connection) {
      if (this.pool.length < this.maxSize) {
        connection.close();
        this.pool.push(connection);
      }
    }
  }
  
  // Client code
  const pool = new ObjectPool(5);
  
  const connection1 = pool.acquire();
  connection1.query('SELECT * FROM users');
  pool.release(connection1);
  
  const connection2 = pool.acquire();
  connection2.query('INSERT INTO orders ...');
  pool.release(connection2);



  // ************************* Image Loading and Caching Example: *************************

  class ImageObject {
    constructor(src) {
      this.image = new Image();
      this.image.src = src;
      console.log(`Loading image: ${src}`);
    }
    
    display() {
      // Simulate displaying the image on the UI
    }
  }
  
  class ImagePool {
    constructor() {
      this.pool = [];
    }
    
    getImage(src) {
      if (this.pool.length > 0) {
        const image = this.pool.pop();
        image.image.src = src; // Reuse image object with a new source
        return image;
      }
      console.log(`Creating a new image object for: ${src}`);
      return new ImageObject(src);
    }
    
    releaseImage(image) {
      this.pool.push(image);
    }
  }
  
  // Usage
  const imagePool = new ImagePool();
  const image1 = imagePool.getImage("image1.jpg");
  image1.display();
  imagePool.releaseImage(image1);
  
  const image2 = imagePool.getImage("image2.jpg");
  image2.display();
  imagePool.releaseImage(image2);


