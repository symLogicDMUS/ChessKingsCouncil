import React from "react";
import {Tooltip} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { useStyles } from "./PieceName.jss";

export function PieceName({theme, tooltipPlacement, children}) {
    const classes = useStyles({theme});
    return (
        <Tooltip title={children} TransitionComponent={"Zoom"} placement={tooltipPlacement}>
            <Typography
                noWrap
                variant="h6"
                className={classes.piece_name}
            >
                {children}
            </Typography>
        </Tooltip>
    )
}