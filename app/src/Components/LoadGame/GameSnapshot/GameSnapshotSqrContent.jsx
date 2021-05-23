import React from "react";
import { useStyles } from "./GameSnapshotSqrContent.jss";

export function GameSnapshotSqrContent({ src }) {
    const classes = useStyles();
    return (
        <>
            {src ? (
                <img
                    src={src}
                    className={classes.sqr_content}
                    alt="what is currently on square (piece or nothing) in game"
                />
            ) : null}
        </>
    );
}
