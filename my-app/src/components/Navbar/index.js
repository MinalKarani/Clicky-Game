import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Clicky Game</a>
      <div>
      <ul className="navbar-nav">
      <li className="nav-item">
      <span className="nav-item msg2">Click an image to begin!</span> 
      </li>
      <li className="nav-item">
      <span className="nav-item msg2">Score: <span className="score"> {props.score} </span>| Top Score: <span className="topScore"> 0 </span></span>
      </li>
    </ul>
    
   
      </div>
    </nav>
  );
}

export default Navbar;
