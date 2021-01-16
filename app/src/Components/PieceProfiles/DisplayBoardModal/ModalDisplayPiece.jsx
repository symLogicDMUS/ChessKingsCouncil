import React from "react";
import {useStyles} from "./ModalDisplayPiece.jss";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function ModalDisplayPiece({pieceImgBase64Str, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <img src={pieceImgBase64Str}
             className={classes.piece}
        />
    )
}