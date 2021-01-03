import React, {useState} from "react";
import {Portal} from "@material-ui/core";
import {AnimatePresence} from "framer-motion";
import {animations} from "../styles/animations/top/animations.jss";
import {useStyles } from "./AnimatePresencePortal.jss";
import {fill_variants, stroke_variants} from "../styles/animations/variants/piece_saved_successfully.jss";

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