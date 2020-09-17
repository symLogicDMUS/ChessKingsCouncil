import React from "react";
import "../CreatePiece.css";
import "./CreatePiecePiece.css";

export class CreatePiecePiece extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="my-piece">{this.props.pieceImg}</div>
    }      
}