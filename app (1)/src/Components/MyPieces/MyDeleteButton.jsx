import React from "react";
import "./MyDeleteButton.css";

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
            <div className="my-delete-button" onClick={this.delete}>
                Delete
            </div>
        )
    }
}