import React from "react";
import "./PieceSquare.css";


export function PieceSquare({pxPos, children}) {

    return (
        <div className="test-ai-piece-square" style={{left:pxPos.left, top:pxPos.top}}>
            {children}
        </div>
    )    

}