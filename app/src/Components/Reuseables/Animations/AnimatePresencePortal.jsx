import React from "react";
import {AnimatePresence} from "framer-motion";
import {Backdrop, Portal} from "@material-ui/core";
import {useStyles} from "./AnimatePresencePortal.jss";

export function AnimatePresencePortal({children}) {

    const classes = useStyles();

    return (
        <Portal>
            <AnimatePresence>
                <Backdrop className={classes.backdrop} open>
                    {children}
                </Backdrop>
            </AnimatePresence>
        </Portal>
    );
}