import React from "react";
import { useStyles } from "./RangePiece.jss";

export function RangePiece({ id, toggleDisplayOfPieceRange, pieceImgBase64Str, alt }) {
    const classes = useStyles();
    return (
        <img
            src={pieceImgBase64Str}
            className={classes.piece}
            onClick={() => toggleDisplayOfPieceRange(id)}
            alt={`${alt} (icon of a piece)`}
        />
    );
}
