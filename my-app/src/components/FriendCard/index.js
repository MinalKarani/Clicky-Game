import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
                
            <img className="click-item" alt="Dogs" onClick={props.handleImageClick} src={props.image}/>
       
       
  );
}

export default FriendCard;
