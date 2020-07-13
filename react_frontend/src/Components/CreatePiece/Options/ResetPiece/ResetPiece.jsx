import React from "react"
import "../Options.css";

export class ResetPiece extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="option reset-option">
                <img src="/Images/reset-piece.svg" style={{width:55, height:75}} />
            </div>
        );
    }

}