import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./SquareText.jss";

export function SpanLabel({hasFabChild, theme}) {
    const classes = useStyles({theme: theme });

    return (
        <Typography className={clsx(classes.sqr_text, {
            [classes.adjust]: hasFabChild
        })} nowrap>
            Span
        </Typography>
    )
}