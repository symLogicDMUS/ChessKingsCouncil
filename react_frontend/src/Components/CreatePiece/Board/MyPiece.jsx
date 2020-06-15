import React from "react";
import "../CreatePiece.css";
import "./MyPiece.css";

export class MyPiece extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <img src={require(`../../MyPieces/Images/${this.props.id_}.svg`)} className="my-piece" />
    }
       
}

