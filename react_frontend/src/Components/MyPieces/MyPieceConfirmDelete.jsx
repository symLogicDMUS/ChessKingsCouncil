import React from "react";
import "./MyPieceConfirmDelete.css";

export class MyPieceConfirmDelete extends React.Component {

    constructor(props){
        super(props);
        this.confirm = this.confirm.bind(this);
        this.deny = this.deny.bind(this);
    }

    confirm() {
        this.props.delete(this.props.pieceName);
        this.props.togleConfirmDeleteModal(false);
        this.props.setPiece(null);
    }

    deny() {
        this.props.togleConfirmDeleteModal(false);
        this.props.setPiece(null);
    }

    render() {
        return (
            <div className="my-piece-confirm-delete-modal">
                <div className="my-piece-confirm-delete-window">
                    <div className="my-piece-confirm-delete-heading">
                        You are asking to delete piece "{this.props.pieceName}". Games in progress will not be effected but the piece's record for new games will be destroyed. This action cannot be undone. Are you sure you want to delete piece "{this.props.pieceName}"?
                    </div>
                    <div className="my-piece-confirm-delete-button" onClick={this.confirm} style={{left:138}}>
                        Yes
                    </div>
                    <div className="my-piece-confirm-delete-button" onClick={this.deny} style={{left:326}}>
                        No
                    </div>
                </div>
            </div>
        )
    }


}