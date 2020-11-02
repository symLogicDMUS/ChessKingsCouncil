import React from "react";
import {getButtonSize} from "../styles/button/button-size";
import "./MyDeleteButton.scss";

export class MyDeleteButton extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.setPiece(this.props.pieceName);
        this.props.togleConfirmDeleteModal(true);
    }

    render() {
        return (
            <div className="my-delete-button" style={getButtonSize(window.screen.availHeight * 0.02)} onClick={this.delete}>
                Delete
            </div>
        )
    }
}