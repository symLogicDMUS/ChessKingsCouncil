import React from "react";
import "../CreatePiece.css";
import "./MyPiece.css";

export class MyPiece extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="my-piece">{this.props.pieceImg}</div>
    }      
}