import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

   // Creating a root DOM node where the React app will be rendered.
   // This assumes there's an element with id="root" in your index.html file.
 const root = ReactDOM.createRoot(document.getElementById('root'));
   // Rendering the App component into the root element.
   // This starts your React application and displays whatever App returns.
     root.render(
     <App />
   );
