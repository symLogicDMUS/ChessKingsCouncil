import React from "react";
import {Avatar} from "@material-ui/core";
import {fontSizeAlt3 as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./CreatePiecePiece.jss";

export function CreatePiecePiece({pieceImgBase64Str, rf, theme, isLightSqr}) {
    const classes = useStyles({fontSize: fontSize, theme: theme, isLightSqr: isLightSqr})
    return (
        <Avatar className={classes.piece} src={pieceImgBase64Str} alt="icon of a piece">
            {rf}
        </Avatar>
    );
}