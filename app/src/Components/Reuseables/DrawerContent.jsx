import React from "react";
import { useStyles } from "./DrawerContent.jss";

export function DrawerContent({children}) {
    const classes = useStyles();
    return (
        <div className={classes.drawer_content}>
            {children}
        </div>
    )
}