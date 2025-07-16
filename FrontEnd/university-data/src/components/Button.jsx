import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

// Button component definition
function Button(props) {
  return (
    // Link is used instead of <a> for client-side routing
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  );
}

// Export the Button so it can be used in other parts of the app
export default Button;