import React from "react";
import { useStyles } from "./ProfileWBRangePiece.jss";

export function ProfileWBRangePiece({pieceImgUrl, alt}) {
    const classes = useStyles();
    return (
        <img
            className={classes.piece}
            src={pieceImgUrl}
            alt={alt}
        />
    )
}