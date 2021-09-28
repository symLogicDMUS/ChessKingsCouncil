import React from "react";
import { Frame } from "framer";
import { Typography } from "@material-ui/core";
import { spanFrame, useStyles } from "./SquareText.jss";
import { themes } from "../../../styles/themes/themes.jss";

export function SpanLabel({ theme, showSpanText, children }) {
    const classes = useStyles({ theme: theme });
    return (
        <Frame
            animate={{
                scale: [1.25, 1],
                borderRadius: [25, 0],
                opacity: [0, 1],
            }}
            transition={{ duration: 0.3 }}
            style={spanFrame(theme)}
            width="100%"
            height="100%"
        >
            {showSpanText && (
                <Typography
                    className={classes.sqr_text}
                    style={{ fontSize: "3vw" }}
                >
                    {children}
                </Typography>
            )}
        </Frame>
    );
}
