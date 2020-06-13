import React from "react";
import "./CreatePiece.css";

export class MyPiece extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={require('../../GameRoot/images_of_pieces/wK.png')} />
        );
    }
}