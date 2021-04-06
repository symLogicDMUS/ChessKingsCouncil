import React from "react";
import clsx from "clsx";
import { Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./FabChild.jss";

/**
 * Close the interactive tools that are displayed on the CreatePiece board for thin screens
 */
export function FabChild({
    onClick,
    className,
    style,
    theme,
}) {
    const classes = useStyles({ theme: theme });
    return (
        <Fab
            onClick={onClick}
            className={clsx(classes.fab, {
                [className]: className,
            })}
            size='small'
            style={style}
        >
            <CloseIcon />
        </Fab>
    );
}
