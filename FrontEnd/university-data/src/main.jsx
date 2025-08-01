import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // this enables navbar toggling
import App from './App.jsx';

   // Creating a root DOM node where the React app will be rendered.
   // This assumes there's an element with id="root" in your index.html file.
 const root = ReactDOM.createRoot(document.getElementById('root'));
   // Rendering the App component into the root element.
   // This starts your React application and displays whatever App returns.
     root.render(
     <App />
   );
