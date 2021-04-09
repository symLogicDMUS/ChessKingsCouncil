import React from "react";
import { Frame } from "framer";
import { spanFrame, useStyles } from "./SquareText.jss";
import { fade, Typography } from "@material-ui/core";
import clsx from "clsx";
import { themes } from "../../../styles/themes.jss";

export function SpanLabel({ hasFabChild, theme }) {
    const classes = useStyles({ theme: theme });
    return (
        <Frame
            animate={{
                backgroundColor: [themes[theme].sqr_text, themes[theme].span],
                scale: [1.25, 1],
                borderRadius: [25, 0],
                opacity: [0, 1],
            }}
            transition={{ duration: 0.3 }}
            style={spanFrame(theme)}
            width="100%"
            height="100%"
        >
            <Typography className={classes.sqr_text}>
                span
            </Typography>
        </Frame>
    );
}
