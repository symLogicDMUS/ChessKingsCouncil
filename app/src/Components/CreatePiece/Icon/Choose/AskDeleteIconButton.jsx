import React, { Component } from "react";
import "./AskDeleteIconButton.scss";

export class AskDeleteIconButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.imgNameChoice) {
            return (
                <button className="delete-active" onClick={this.props.openAskDeleteModal}>
                    Delete
                </button>
            );
        } else {
            return (
                <button className="delete-inactive">
                    Delete
                </button>
            );
        }
    }
}
