import React, {useEffect} from "react";
import clsx from "clsx";
import "../Background/_backgrounds.scss";
import Box from "@material-ui/core/Box";
import {AnimatePresence} from "framer-motion";
import {loading_path} from "./loading_path";
import { useStyles } from "./Loading.jss";

export function Loading() {
    useEffect(() => {
        document.body.className = 'dark-background';
    }, [])

    const classes = useStyles()

    return (
        <div className={classes.body}>
            <Box className={classes.content}>
                <AnimatePresence>
                    <div className={classes.animation}>
                        {loading_path}
                    </div>
                </AnimatePresence>
            </Box>
        </div>
    );

}