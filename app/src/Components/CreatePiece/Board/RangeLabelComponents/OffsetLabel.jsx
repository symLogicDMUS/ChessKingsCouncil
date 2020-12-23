import React from "react";
import {sqrFontSize} from "../../CreatePiece.jss";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./SquareText.jss";

export function OffsetLabel({offset}) {

    const classes = useStyles({fontSize: sqrFontSize})

    let xSign = null;
    let ySign = null;

    if (offset[0] === 0 && offset[1] === 0) {
        return <div>{null}</div>;
    }

    if (offset[0] < 0)
        xSign = "-"
    else
        xSign = "+"

    if (offset[1] < 0)
        ySign = "-"
    else
        ySign = "+"

    return (
        <>
            <Typography className={classes.sqr_text}>
                x {xSign} {Math.abs(offset[0])}
            </Typography>
            <Typography className={classes.sqr_text}>
                y {ySign} {Math.abs(offset[1])}
            </Typography>
        </>
    )
}

