import React from "react";
import "./NewGameDisplayPiece.css";

export function NewGameDisplayPiece({imgName}) {


        return ( 
            <img src={`/Images/Pieces/${imgName}`} 
                 style = {{
                    position: "absolute",
                    zIndex: "inherit",
                    width: "40px",
                    height: "40px"
                }} 
            />
        )
}