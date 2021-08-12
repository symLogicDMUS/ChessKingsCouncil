import React from "react";
import { useStyles } from "./GameSnapshotSquare.jss";

export function GameSnapshotSquare({ rf, isLightSqr, theme, children }) {
    const classes = useStyles({ theme: theme, rf: rf, isLightSqr: isLightSqr });
    return <div className={classes.square}>{children}</div>;
}
