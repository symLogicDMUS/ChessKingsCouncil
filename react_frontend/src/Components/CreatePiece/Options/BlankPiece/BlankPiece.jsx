import React from "react";
import "../Options.css";

export class BlankPiece extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="option blank-option">
                <img src="/Images/blank-piece.svg" style={{width:55, height:75}} />
            </div>
        );
    }
}