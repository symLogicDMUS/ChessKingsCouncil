import React from "react";
import "./MyPiecesDisplayPiece.css";

export function MyPiecesDisplayPiece({pieceImgBase64Str}) {

        return ( 
            <img src={pieceImgBase64Str} 
                 style = {{
                    position: "absolute",
                    zIndex: "inherit",
                    width: "40px",
                    height: "40px"
                }} 
            />
        )
}