import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Checkbox} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./InlinePromo.jss";

export function InlinePromo(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <Box className={classes.checkbox}>
            <Typography >
                {props.children}
            </Typography>
            <Checkbox />
        </Box>
    );
}