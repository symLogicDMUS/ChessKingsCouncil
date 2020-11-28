import React from "react";
import {useStyles} from "./CreatePiecePiece.jss";

export function CreatePiecePiece({pieceImgBase64Str}) {
    const classes = useStyles()
    return (
        <div className={classes.piece}>
            {pieceImgBase64Str ? (
                <img src={pieceImgBase64Str} width="100%" height="100%" alt="icon of a piece"/>
            ) : null}
        </div>
    );
}