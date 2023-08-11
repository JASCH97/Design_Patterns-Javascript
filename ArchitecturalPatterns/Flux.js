/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Flux pattern is designed to manage the flow of data within an application by enforcing a 
unidirectional data flow. It aims to solve the problem of complex data dependencies and make 
it easier to reason about how data changes and propagates through the application.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Actions: Represent events or user interactions that trigger data changes. They are plain 
JavaScript objects that describe what happened.
Dispatcher: Centralized hub that receives actions and dispatches them to registered callbacks. 
It ensures that actions are processed in a predictable order.
Stores: Hold the application state and business logic. They respond to dispatched actions, 
update their state, and notify views of changes.
Views (React Components): Represent the user interface and receive updates from stores. They 
re-render when data in the stores changes.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Predictable State Management: The unidirectional flow of data makes it easier to track how changes 
occur and understand their impact.
Decoupling: Components and stores are decoupled, allowing for more maintainable and testable code.
Debugging: With a single source of truth (stores), it's easier to debug and trace the origin of data changes.
Scalability: Flux simplifies handling complex data flows, making it more suitable for larger applications.

*/

// ************************* Flux with Vanilla JavaScript Example: *************************

// Actions
const ActionTypes = {
    ADD_TODO: "ADD_TODO",
  };
  
  function addTodo(text) {
    return {
      type: ActionTypes.ADD_TODO,
      payload: text,
    };
  }
  
  // Dispatcher
  class Dispatcher {
    constructor() {
      this.callbacks = [];
    }
  
    register(callback) {
      this.callbacks.push(callback);
    }
  
    dispatch(action) {
      this.callbacks.forEach(callback => callback(action));
    }
  }
  
  const dispatcher = new Dispatcher();
  
  // Store
  class TodoStore {
    constructor() {
      this.todos = [];
    }
  
    handleAction(action) {
      switch (action.type) {
        case ActionTypes.ADD_TODO:
          this.todos.push(action.payload);
          break;
      }
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
  const todoStore = new TodoStore();
  dispatcher.register(todoStore.handleAction.bind(todoStore));
  
  // View (Console)
  function render() {
    console.log("Todos:", todoStore.getTodos());
  }
  
  dispatcher.register(render);
  
  // User Interaction
  dispatcher.dispatch(addTodo("Buy groceries"));


  

  // ************************* Flux with React (using Flux architecture with Redux) Example: *************************

  // Actions
const ADD_TODO = "ADD_TODO";

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

// Reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}

// Redux Store
const { createStore } = Redux;
const store = createStore(todoReducer);

// React Component (View)
function TodoApp() {
  const todos = store.getState();

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => store.dispatch(addTodo("New Todo"))}>
        Add Todo
      </button>
    </div>
  );
}

// React DOM Rendering
const { Provider } = ReactRedux;
const { render } = ReactDOM;
const { connect, useSelector } = ReactRedux;

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
