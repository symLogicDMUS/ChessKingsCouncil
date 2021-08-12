import React from "react";
import "../../styles/Background/_backgrounds.scss";
import Box from "@material-ui/core/Box";
import { AnimatePresence } from "framer-motion";
import { loading_path } from "./loading_path";
import { useStyles } from "./Loading.jss";

function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <Box className={classes.content}>
                <AnimatePresence>
                    {loading_path(classes.animation)}
                </AnimatePresence>
            </Box>
        </div>
    );
}

export default Loading;
