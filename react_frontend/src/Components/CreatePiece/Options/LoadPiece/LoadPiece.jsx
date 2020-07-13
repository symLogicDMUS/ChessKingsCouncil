import React from "react";
import "../Options.css";

export class LoadPiece extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "option load-option">
                <img src="/Images/load-piece.svg" style={{width:55, height:75}} />
            </div>
        )
    }
}