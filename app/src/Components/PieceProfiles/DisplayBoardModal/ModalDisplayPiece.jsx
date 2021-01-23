import React from "react";
import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "./ModalDisplayPiece.jss";

export function ModalDisplayPiece({pieceImgBase64Str, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize0040});
    return (
        <img src={pieceImgBase64Str}
             className={classes.piece}
        />
    )
}