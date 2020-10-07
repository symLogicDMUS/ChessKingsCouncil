import React from "react";
import "./MyPiecesDisplayPiece.css";

export function MyPiecesDisplayPiece({imgName}) {


        return ( 
            <img src={imgName} 
                 style = {{
                    position: "absolute",
                    zIndex: "inherit",
                    width: "40px",
                    height: "40px"
                }} 
            />
        )
}