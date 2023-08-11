/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Single Page Application (SPA) design pattern aims to create a seamless and fluid user experience 
by building web applications as a single, dynamically updating web page, eliminating the need for 
page refreshes during user interactions.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
HTML/CSS/JavaScript: The core technologies for building SPAs, where HTML structures the content, 
CSS styles it, and JavaScript adds interactivity.

Routing: Handles navigation within the application by dynamically changing the content based on 
the requested URL without full page reloads.

Views and Templates: Defines the different components or views of the application, often using 
templates to structure the presentation.

API Calls: SPAs rely heavily on asynchronous communication with backend services through APIs 
(Application Programming Interfaces) to fetch and update data.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Smooth User Experience: SPAs provide faster and smoother interactions as content updates occur 
without full page reloads.

Better Performance: By loading necessary assets initially and updating content dynamically, SPAs 
reduce the need for repeated network requests.

Responsive Design: SPAs are well-suited for creating responsive and mobile-friendly user interfaces.

Maintainability: SPA architectures often promote cleaner code organization and separation of concerns, 
making applications more maintainable.

*/

// ************************* React SPA Example: *************************

// index.html
<div id="root"></div>

// App.js (React Component)
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My SPA</h1>
      </header>
      <main>
        {/* Content */}
      </main>
      <footer>
        <p>&copy; 2023 My SPA</p>
      </footer>
    </div>
  );
}

export default App;

// index.js (Entry Point)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// ************************* Angular SPA Example: *************************

// app.component.html (Angular Component)
<div>
  <header>
    <h1>Welcome to My SPA</h1>
  </header>
  <main>
    <!-- Content -->
  </main>
  <footer>
    <p>&copy; 2023 My SPA</p>
  </footer>
</div>

// app-routing.module.ts (Routing)
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Define routes and corresponding components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
