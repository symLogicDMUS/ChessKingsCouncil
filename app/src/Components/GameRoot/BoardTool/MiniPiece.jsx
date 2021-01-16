import React from "react";
import { useStyles } from "./MiniPiece.jss";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function MiniPiece({ id, toggleDisplayOfPieceRange, pieceImgBase64Str, alt }) {
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
