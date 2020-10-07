import React from "react";
import "./CreatePieceDisplayPiece.css";

export function CreatePieceDisplayPiece({pieceImgBase64Str}) {


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