/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Micro Frontends design pattern extends the concept of microservices to the frontend, allowing 
development teams to independently build, deploy, and maintain small, self-contained parts of a 
web application. Each micro frontend represents a specific feature, area, or functionality of the 
application.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Micro Frontends: Independent, self-contained frontend applications that handle a specific aspect 
of the overall user interface.

Integration: Mechanisms for combining multiple micro frontends into a unified user experience, 
often using iframes, Web Components, or client-side routing.

Shared Services: Services or utilities that are shared among multiple micro frontends, promoting 
consistency and reducing duplication.

Communication: Methods for communication between micro frontends, such as events, shared state, 
or API calls.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Team Autonomy: Different teams can work on separate micro frontends, enabling autonomy and parallel 
development.

Scalability: Micro frontends allow for independent scaling and deployment, improving performance and 
resource utilization.

Technology Agnostic: Each micro frontend can be built using different technologies, enabling the use 
of the best tool for the task.

Enhanced Collaboration: Teams can collaborate more effectively, as they can work independently without 
stepping on each other's toes.

*/


// ************************* Micro Frontend (Client-Side Code - React) Example: *************************

// MicroFrontend.js
import React, { useEffect } from 'react';

const MicroFrontend = ({ name, host }) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    if (document.getElementById(scriptId)) {
      loadMicroFrontend();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `${host}/remoteEntry.js`;
    script.onload = loadMicroFrontend;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, host]);

  const loadMicroFrontend = () => {
    // Mount micro frontend here
  };

  return <div id={`micro-frontend-${name}`} />;
};

export default MicroFrontend;



// ************************* Module Federation with Webpack Example: *************************

// Container App Webpack Configuration
module.exports = {
    // ...
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          feature1: 'feature1@http://localhost:3001/remoteEntry.js',
          feature2: 'feature2@http://localhost:3002/remoteEntry.js',
        },
      }),
    ],
  };
  
  // Feature 1 Webpack Configuration
  module.exports = {
    // ...
    plugins: [
      new ModuleFederationPlugin({
        name: 'feature1',
        filename: 'remoteEntry.js',
        exposes: {
          './Feature1App': './src/App',
        },
      }),
    ],
  };


  // ************************* WebComponents Example: *************************

  // Micro Frontend 1 (Using Web Components)
class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Styles */
        </style>
        <div>
          <!-- Content -->
        </div>
      `;
    }
  }
  
  customElements.define('my-component', MyComponent);
