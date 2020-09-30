import React from "react";
import "./CreatedPieceClose.css";

export class CreatedPieceClose extends React.Component {

    constructor(props) {
        super(props)
        this.closeLoadModal = this.closeLoadModal.bind(this);
    }

    closeLoadModal() {
        this.props.togleLoadModal(false);
    }

    render() {
        return (
            <div className="created-piece-close" onClick={this.closeLoadModal}>
                <div className="close-button"><img src="/Images/close.svg" style={{width:21, height:21}} alt="close window" /></div>
            </div>
        )
    }
}