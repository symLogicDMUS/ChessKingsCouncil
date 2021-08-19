import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../../styles/Background/_backgrounds.scss";
import { loading_path } from "./loading_path";
import { useStyles } from "./Loading.jss";

function Loading() {
    useEffect(() => {
        document.body.className = "blue-background";
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.body}>
            <AnimatePresence>{loading_path(classes.animation)}</AnimatePresence>
        </div>
    );
}

export default Loading;
