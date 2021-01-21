import React, {useState} from "react";
import { smallBoardFontSizeDesktop as fontSize } from "../../Reuseables/Board.jss";
import { useStyles } from "./MiniPiece.jss";

export function MiniPiece({
    togglePiece,
    openProfile,
    pieceImgBase64Str,
    alt,
}) {
    const classes = useStyles({ fontSize: fontSize });
    return (
        <>
            <img
                src={pieceImgBase64Str}
                className={classes.piece}
                onClick={() =>  {
                    openProfile();
                    togglePiece();
                }}
                alt={`${alt} (icon of a piece)`}
            />
        </>
    );
}
