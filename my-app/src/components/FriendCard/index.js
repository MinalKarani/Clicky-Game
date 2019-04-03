import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
        <div className="wrapper">
        <img alt={props.name} src={props.image} />
        </div>
    
  );
}

export default FriendCard;
