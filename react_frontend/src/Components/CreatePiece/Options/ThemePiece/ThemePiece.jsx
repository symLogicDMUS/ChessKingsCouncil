import React from "react";
import "../Options.css";

export class ThemePiece extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="option theme-option">
                <img src="/Images/theme-piece.svg" style={{width:55, height:75}} />
            </div>
        )
    }
}