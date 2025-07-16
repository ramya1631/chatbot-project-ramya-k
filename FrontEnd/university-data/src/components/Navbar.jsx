import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.png";

class Navbar extends Component {
      // State to track whether the menu icon is clicked (for mobile view toggle)
  state = { clicked: false };

  // Toggle the 'clicked' state when the menu icon is clicked
    handleClicked = () => {
     this.setState({ clicked: !this.state.clicked });
   };

  render() {
    return (
      <nav className="NavbarItems">
            {/* Logo and website title with navigation to home */}
       <Link to="/" className="navbar-logo">
                <img src={logo} alt="LaunchCode Logo" className="logo-img" />
                <span className="logo-text">LaunchCode University</span>
              </Link>
               {/* Hamburger menu icon (changes to 'X' when clicked) */}
        <div className="menu-icons" onClick={this.handleClicked}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        {/* Navigation menu items */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.url}
                onClick={() => this.setState({ clicked: false })}  >
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;