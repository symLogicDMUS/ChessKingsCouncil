import React from "react";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./ModalDisplayPiece.jss";

export function ModalDisplayPiece({pieceImgBase64Str, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <img src={pieceImgBase64Str}
             className={classes.piece}
        />
    )
}