import React from "react";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./SquareText.jss";

export function SpanLabel({theme}) {
    const classes = useStyles({theme: theme });
    return (
        <Typography className={classes.sqr_text} noWrap>
            Span
        </Typography>
    )
}