import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { MuiButton as Button } from "./MuiButton";
import { Close } from "./Close";
import { fontSize } from "../styles/fontSize.jss";
import { button, close_icon, useStyles } from "./StandardModal.jss";

export function StandardModal({
    text,
    title,
    theme,
    closeClick,
    children
}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        onClick={closeClick}
                        style={close_icon(fontSize)}
                        theme={theme}
                    />
                </Box>
                <Typography
                    className={classes.title}
                    align={"center"}
                    noWrap={true}
                >
                    {title}
                </Typography>
                <Typography
                    className={classes.paragraph}
                    align={"center"}
                    paragraph={true}
                >
                    {text}
                </Typography>
                <Box className={classes.buttons}>
                    {children}
                </Box>
            </Box>
        </div>
    );
}