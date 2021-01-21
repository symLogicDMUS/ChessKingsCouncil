import React from "react";
import { Close } from "./Close";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { fontSize002 } from "../styles/fontSize.jss";
import { close_icon, useStyles } from "./StandardModal.jss";
import "../styles/Scrollbar.scss";

export function StandardModal({ text, title, theme, closeClick, children }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        onClick={closeClick}
                        style={close_icon(fontSize002)}
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
                <Box className={classes.buttons}>{children}</Box>
            </Box>
        </div>
    );
}