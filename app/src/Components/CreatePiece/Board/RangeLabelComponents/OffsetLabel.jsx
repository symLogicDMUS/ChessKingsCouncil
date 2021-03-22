import React from "react";
import clsx from "clsx";
import {Typography} from "@material-ui/core";
import {useStyles} from "./SquareText.jss";

export function OffsetLabel({offset, hasToolChild, theme}) {

    const classes = useStyles({theme: theme})

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
            <Typography className={clsx(classes.sqr_text, {
                [classes.adjust]: hasToolChild,
            })} nowrap>
                x {xSign} {Math.abs(offset[0])}
                < br />
                y {ySign} {Math.abs(offset[1])}
            </Typography>
        </>
    )
}