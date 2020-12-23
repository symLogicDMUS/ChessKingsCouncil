import React from "react";
import Typography from "@material-ui/core/Typography";
import {sqrFontSize} from "../../CreatePiece.jss";
import {useStyles} from "./SquareText.jss";

export function SpanLabel({theme}) {
    const classes = useStyles({theme: theme, fontSize: sqrFontSize});
    return (
        <Typography className={classes.sqr_text}>
            Span
        </Typography>
    )
}