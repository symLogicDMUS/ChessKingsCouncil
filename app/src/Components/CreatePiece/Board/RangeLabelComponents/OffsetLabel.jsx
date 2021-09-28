import React from "react";
import { Frame } from "framer";
import Box from "@material-ui/core/Box";
import OffsetInt from "./OffsetInt";
import { offsetFrame, useStyles as useMoreStyles } from "./SquareText.jss";

export function OffsetLabel({ offset, showOffsetText, theme }) {
    const classes2 = useMoreStyles({ theme: theme });

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
                <Box className={classes2.sqr_text}>
                    <OffsetInt>
                        {xSign}{Math.abs(offset[0])}
                    </OffsetInt>
                    <OffsetInt>
                        {ySign}{Math.abs(offset[1])}
                    </OffsetInt>
                </Box>
            )}
        </Frame>
    );
}
