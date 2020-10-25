import React from "react";
import "./CreatedPieceCheckBox.scss";

export class CreatedPieceCheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.checkmark = null;
    }

    render() {
        this.checkmark = null;
        if (this.props.pieceName === this.props.selectedPiece) {
            this.checkmark = (
                <img
                    src="/Images/checkmark/silver-checkmark.svg"
                    className="created-piece-profile-header-checkbox-checkmark"
                />
            );
        }

        return (
            <div
                className="created-piece-profile-header-checkbox"
                onClick={() => this.props.select(this.props.pieceName)}
            >
                {this.checkmark}
            </div>
        );
    }
}
