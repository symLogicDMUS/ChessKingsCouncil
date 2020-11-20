import React from "react";
import "../scss/CreatePiece.scss";
import "./_CreatePiecePiece.scss";

export class CreatePiecePiece extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-piece">
                {this.props.pieceImgBase64Str ? (
                    <img src={this.props.pieceImgBase64Str} width="100%" height="100%" alt="icon of a piece" />
                ) : null}
            </div>
        );
    }
}
