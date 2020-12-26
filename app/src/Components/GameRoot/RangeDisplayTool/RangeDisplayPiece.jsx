import React from "react";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./RangeDisplayPiece.jss";

export function RangeDisplayPiece({ id, toggleDisplayOfPieceRange, pieceImgBase64Str, alt }) {
    const classes = useStyles({fontSize: fontSize});
    return (
        <img
            src={pieceImgBase64Str}
            className={classes.piece}
            onClick={() => toggleDisplayOfPieceRange(id)}
            alt={`${alt} (icon of a piece)`}
        />
    );
}
