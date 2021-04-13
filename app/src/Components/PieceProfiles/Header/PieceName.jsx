import React from "react";
import clsx from "clsx";
import {Tooltip} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { useStyles } from "./PieceName.jss";

export function PieceName({theme, title, tooltipPlacement, className, style, children}) {
    const classes = useStyles({theme});
    return (
        <Tooltip title={title ? title : children} TransitionComponent={"Zoom"} placement={tooltipPlacement}>
            <Typography
                noWrap
                variant="h6"
                className={clsx(classes.piece_name, {
                    [className]: className,
                })}
                style={style}
            >
                {children}
            </Typography>
        </Tooltip>
    )
}