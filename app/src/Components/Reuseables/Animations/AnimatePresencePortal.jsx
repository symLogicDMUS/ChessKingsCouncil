import React from "react";
import {Portal} from "@material-ui/core";
import {AnimatePresence} from "framer-motion";
import {useStyles} from "./AnimatePresencePortal.jss";

export function AnimatePresencePortal({children}) {

    const classes = useStyles()

    return (
        <Portal>
            <AnimatePresence>
                <div className={classes.modal}>
                    {children}
                </div>
            </AnimatePresence>
        </Portal>
    );
}