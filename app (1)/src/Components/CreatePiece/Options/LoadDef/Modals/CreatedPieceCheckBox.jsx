import React from "react";
import "./CreatedPieceCheckBox.css";

export class CreatedPieceCheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.checkmark = null;
        this.selectMe = this.selectMe.bind(this);
    }

    selectMe() {
        this.props.select(this.props.pieceName)
    }

    render() {

        this.checkmark = null;
        if (this.props.pieceName === this.props.selectedPiece) 
            this.checkmark = <img src="/Images/silver-checkmark.svg" className="checkmark" />

        return (
            <div className="checkbox" onClick={this.selectMe}>
                {this.checkmark}
            </div>
        )
    }
}