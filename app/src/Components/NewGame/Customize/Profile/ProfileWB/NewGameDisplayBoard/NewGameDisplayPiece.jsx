import React from "react";
import "./NewGameDisplayPiece.css";

export function NewGameDisplayPiece({pieceImgBase64Str}) {


        return ( 
            <img src={pieceImgBase64Str} 
                 style = {{
                    position: "absolute",
                    zIndex: "inherit",
                    width: "40px",
                    height: "40px"
                }}
                alt="icon for a piece" 
            />
        )
}