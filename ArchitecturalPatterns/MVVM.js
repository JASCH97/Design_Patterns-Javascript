/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Model-View-ViewModel (MVVM) design pattern is a structured architectural pattern used in 
JavaScript applications to separate concerns, improve code organization, and enhance maintainability. 
MVVM is commonly used in frontend frameworks like Angular, Knockout.js, and Vue.js.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Model: Represents the application's data and business logic. It is responsible for data manipulation, 
validation, and storage.
View: Represents the user interface, which displays data and receives user input. The view is passive 
and should be as declarative as possible.
ViewModel: Acts as an intermediary between the Model and the View. It holds the presentation logic, 
transforms data from the Model into a format suitable for the View, and handles user interactions. 
It may also expose commands and methods that the View can bind to.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Separation of Concerns: MVVM enforces a clear separation between UI logic (ViewModel) and data 
manipulation (Model).

Testability: The ViewModel is easily testable because it doesn't directly depend on the View.

Code Reusability: ViewModel logic can be shared across multiple views, promoting code reusability.

Flexibility: The ViewModel can abstract complex data manipulation, making the View simpler and more focused on rendering.

*/


// ************************* MVVM with Vue.js Example: *************************

// Data
const data = {
    message: 'Hello, Vue!'
  };

// ViewModel
const app = new Vue({
    el: '#app',
    data: data
  });

// View
  <div id="app">
    <p>{{ message }}</p>
  </div>



// ************************* MVVM with Knockout.js Example: *************************

// Data
function TaskModel(description, completed) {
    this.description = ko.observable(description);
    this.completed = ko.observable(completed);
  }
  
  // ViewModel
  function TaskViewModel() {
    this.tasks = ko.observableArray([
      new TaskModel('Buy groceries', false),
      new TaskModel('Write report', true)
    ]);
  }
  
  ko.applyBindings(new TaskViewModel());


// View 
<ul data-bind="foreach: tasks">
  <li>
    <input type="checkbox" data-bind="checked: completed" />
    <span data-bind="text: description"></span>
  </li>
</ul>