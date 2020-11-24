import React from "react";
import "../scss/CreatePiece.scss";
import {styles} from "./_CreatePiecePiece.jss";

export function CreatePiecePiece({classes, pieceImgBase64Str }) {
    return (
        <div className={classes.my_piece}>
            {pieceImgBase64Str ? (
                <img src={pieceImgBase64Str} width="100%" height="100%" alt="icon of a piece" />
            ) : null}
        </div>
    );
}
