import React from "react";
import { fontSize0040 } from "../../styles/fontSizes.jss";
import { useStyles } from "./ProfileRangePiece.jss";

export function ProfileRangePiece({ pieceImgBase64Str, theme }) {
    const classes = useStyles({ theme: theme });
    return <img src={pieceImgBase64Str} className={classes.piece} />;
}
