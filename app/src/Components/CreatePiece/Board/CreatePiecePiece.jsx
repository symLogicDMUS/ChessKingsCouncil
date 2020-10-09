import React from "react";
import "../CreatePiece.css";
import "./CreatePiecePiece.css";

export class CreatePiecePiece extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-piece">
                {this.props.pieceImgBase64Str ? (
                    <img src={this.props.pieceImgBase64Str} width="75px" height="75px" alt="icon of a piece" />
                ) : null}
            </div>
        );
    }
}
