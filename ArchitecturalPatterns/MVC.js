/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Model-View-Controller (MVC) architectural design pattern is widely used in JavaScript 
applications to separate concerns and promote modularity. It divides an application into three 
main components: Model, View, and Controller, each with specific responsibilities. 

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
1. MODEL
Intent: The Model represents the application's data and business logic. It manages data manipulation, 
validation, and storage. It notifies observers (usually the Views) when data changes occur.
Key Components: Data structures, business logic, data access, notifications.
Benefits: Separates data handling from presentation, enhances data integrity, promotes reusability.

2. VIEW
Intent: The View is responsible for presenting the data to the user. It receives data from the Model 
and renders it for user interaction. It reacts to changes in the Model by updating the display.
Key Components: UI elements, templates, rendering logic.
Benefits: Isolates UI rendering, promotes a clear separation of concerns, facilitates UI customization.

3. CONTROLLER
Intent: The Controller acts as an intermediary between the Model and the View. It receives user input 
from the View, processes it, and updates the Model accordingly. It also listens for Model changes and 
updates the View as needed.
Key Components: User input handling, data synchronization between Model and View.
Benefits: Decouples user interaction from data manipulation, enables modular development.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -


*/

// ************************* ToDo List Application (Vanilla JavaScript) Example: *************************

// Model
class TodoModel {
    constructor() {
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
      // Notify observers (Views) about data changes
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
  // View
  class TodoView {
    render(todos) {
      // Render UI based on todos data
    }
  }
  
  // Controller
  class TodoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    addTodo(todo) {
      this.model.addTodo(todo);
      this.updateView();
    }
  
    updateView() {
      const todos = this.model.getTodos();
      this.view.render(todos);
    }
  }
  
  const todoModel = new TodoModel();
  const todoView = new TodoView();
  const todoController = new TodoController(todoModel, todoView);
  
  todoController.addTodo("Buy groceries");
  todoController.addTodo("Finish project");



  // ************************* Online Store Example: *************************

  // Model
class ProductModel {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
      // Notify observers (Views) about data changes
    }
  
    getAllProducts() {
      return this.products;
    }
  }
  
  // View
  class ProductView {
    render(products) {
      // Render product listing based on products data
    }
  }
  
  // Controller
  class ProductController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    addProduct(product) {
      this.model.addProduct(product);
      this.updateView();
    }
  
    updateView() {
      const products = this.model.getAllProducts();
      this.view.render(products);
    }
  }
  
  // Example usage
  const productModel = new ProductModel();
  const productView = new ProductView();
  const productController = new ProductController(productModel, productView);
  
  productController.addProduct({ name: "Smartphone", price: 500 });
  productController.addProduct({ name: "Laptop", price: 1000 });
  
  // Display the products
  productController.updateView();
