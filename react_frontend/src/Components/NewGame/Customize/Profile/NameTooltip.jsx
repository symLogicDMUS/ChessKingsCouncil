import React from "react";

export const NameTooltip = ({clientX, clientY, name}) => {

    return (
        <div className="name-tooltip" style={{position:"absolute", 
        left:Math.floor(clientX), 
        top:Math.floor(clientY), 
        color:"white", 
        fontSize:"20px", 
        fontFamily:"Tahoma"}}>
            {name}
        </div>
    )
}