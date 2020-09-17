import React from "react";
import "./NameTooltip.css";

export const NameTooltip = ({clientX, clientY, name}) => {

    return (
        <div className="new-game-name-tooltip" style={{position:"absolute", 
        left:Math.floor(clientX), 
        top:Math.floor(clientY), 
        color:"white", 
        fontSize:"20px", 
        fontFamily:"Tahoma"}}>
            {name}
        </div>
    )
}