import React, { Component } from "react";
import "./ConfirmDeleteGameModal.scss";

export class ConfirmDeleteGameModal extends Component {
    render() {
        return (
            <div className="confirm-delete-game-modal">
                <div className="confirm-delete-game-window">
                    <div className="confirm-delete-game-close" onClick={this.props.cancelDeleteGame}>
                        <img src="/Images/close/close.svg" className="confirm-delete-game-close-x-symbol" alt="close window" />
                    </div>
                    <div className="confirm-delete-game-window-title">
                        Are You Sure you want to delete game {this.props.gameName}?
                    </div>
                    <button
                        className="delete-game-button"
                        onClick={this.props.acceptDeleteGame}
                        style={{ left: 138 }}
                    >
                        Yes
                    </button>
                    <button
                        className="delete-game-button"
                        onClick={this.props.cancelDeleteGame}
                        style={{ left: 326 }}
                    >
                        No
                    </button>
                </div>
            </div>
        );
    }
}
