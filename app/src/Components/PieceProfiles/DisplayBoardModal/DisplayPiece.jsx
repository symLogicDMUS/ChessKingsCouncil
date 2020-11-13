import React from "react";
import "./DisplayPiece.scss";

export function DisplayPiece({pieceImgBase64Str}) {

        return ( 
            <img src={pieceImgBase64Str} 
                 style = {{
                    position: "absolute",
                    zIndex: "inherit",
                    width: "100%",
                    height: "100%"
                }} 
            />
        )
}