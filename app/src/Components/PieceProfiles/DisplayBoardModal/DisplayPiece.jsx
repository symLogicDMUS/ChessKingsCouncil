import React from "react";
import {useStyles} from "./DisplayPiece.jss";

export function DisplayPiece({pieceImgBase64Str}) {
    const classes = useStyles()
    return (
        <img src={pieceImgBase64Str}
             className={classes.piece}
        />
    )
}