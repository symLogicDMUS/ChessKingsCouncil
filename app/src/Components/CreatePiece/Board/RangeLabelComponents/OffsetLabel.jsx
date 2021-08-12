import React from "react";
import { Frame } from "framer";
import { Typography } from "@material-ui/core";
import { offsetFrame, useStyles } from "./SquareText.jss";

export function OffsetLabel({ offset, showOffsetText, theme }) {
    const classes = useStyles({ theme: theme });

    let xSign = null;
    let ySign = null;

    if (offset[0] === 0 && offset[1] === 0) {
        return <div>{null}</div>;
    }

    if (offset[0] < 0) xSign = "-";
    else xSign = "+";

    if (offset[1] < 0) ySign = "-";
    else ySign = "+";

    return (
        <Frame width="100%" height="100%" style={offsetFrame(theme)}>
            {showOffsetText && (
                <Typography className={classes.sqr_text} nowrap>
                    x {xSign} {Math.abs(offset[0])}
                    <br />y {ySign} {Math.abs(offset[1])}
                </Typography>
            )}
        </Frame>
    );
}
