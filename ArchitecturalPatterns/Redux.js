/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
Redux is a state management design pattern for managing the state of a JavaScript application 
in a predictable and centralized manner. It provides a single source of truth for application 
state, making it easier to track changes, manage updates, and maintain a consistent application 
state across components.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Store: The central repository that holds the application state. State changes are triggered by 
dispatching actions to the store.

Actions: Plain JavaScript objects that describe the type of change to be made in the application 
state. Actions are dispatched to the store.

Reducers: Pure functions that specify how the state changes in response to dispatched actions. 
They take the current state and an action and return a new state.

Middleware: Optional functions that sit between dispatching an action and the reducer. Middleware 
can intercept actions, perform asynchronous operations, or modify actions before they reach the 
reducer.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Predictable State: Redux enforces a strict unidirectional data flow, making it easier to predict 
and understand how state changes occur.

Centralized State: All application state is stored in a single store, simplifying debugging, 
testing, and tracking changes.

Time Travel Debugging: Redux allows developers to "time travel" and inspect the state of the 
application at different points in time, aiding in debugging.

Component Isolation: Redux promotes better separation of concerns by extracting state management 
from components.

*/


// ************************* Counter Application Example: *************************

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Store
const { createStore } = Redux;
const store = createStore(counterReducer);

// React Component
const render = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(render);
render();

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});


// ************************* Todo List Application Example: *************************

// Actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
const addTodo = text => ({ type: ADD_TODO, text });
const toggleTodo = id => ({ type: TOGGLE_TODO, id });

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: state.length, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

// Store
const { createStore } = Redux;
const store = createStore(todoReducer);

// React Component
const render = () => {
  const todoList = store.getState().map(todo => (
    `<li class="${todo.completed ? 'completed' : ''}" 
         onClick="dispatchToggle(${todo.id})">${todo.text}</li>`
  ));
  document.getElementById('todo-list').innerHTML = `<ul>${todoList.join('')}</ul>`;
};

store.subscribe(render);
render();

const dispatchToggle = id => {
  store.dispatch(toggleTodo(id));
};



