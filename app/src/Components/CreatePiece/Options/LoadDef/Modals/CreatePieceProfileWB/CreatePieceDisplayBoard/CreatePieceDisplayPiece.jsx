import React from "react";
import "./CreatePieceDisplayPiece.css";

export function CreatePieceDisplayPiece({imgName}) {


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