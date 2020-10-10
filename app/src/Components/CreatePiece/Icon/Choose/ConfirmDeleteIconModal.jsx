import React, { Component } from "react";
import "./ConfirmDeleteIconModal.css";

export class ConfirmDeleteIconModal extends Component {
    render() {
        return (
            <div className="confirm-delete-icon-modal">
                <div className="confirm-delete-icon-window">
                    <div className="confirm-delete-icon-close" onClick={this.props.cancelDeleteIcon}>
                        <img src="/Images/close.svg" className="confirm-delete-icon-close-x-symbol" alt="close window" />
                    </div>
                    <div className="confirm-delete-icon-window-title">
                        Are You Sure you want to delete image {this.props.imgNameChoice}?
                    </div>
                    <button
                        className="delete-icon-button"
                        onClick={this.props.acceptDeleteIcon}
                        style={{ left: 138 }}
                    >
                        Yes
                    </button>
                    <button
                        className="delete-icon-button"
                        onClick={this.props.cancelDeleteIcon}
                        style={{ left: 326 }}
                    >
                        No
                    </button>
                </div>
            </div>
        );
    }
}
