import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Clicky Game</a>
      <div>
      <ul className="navbar-nav">
      <li className="nav-item">
      <span className="nav-item msg2">Click an image to begin!</span> 
      </li>
      <li className="nav-item">
      <span className="nav-item msg2">Score: 0 | Top Score: 0</span>
      </li>
    </ul>
    
   
      </div>
    </nav>
  );
}

export default Navbar;
