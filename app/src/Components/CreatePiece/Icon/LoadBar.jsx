import React from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import {Backdrop, Portal, Typography} from "@material-ui/core";
import { useStyles } from "./LoadBar.jss";

function LoadBar({theme, children}) {
    const classes = useStyles({theme: theme, percentage: children});
    return (
        <Portal>
            <Backdrop open className={classes.backdrop}>
                <motion.div className={classes.window}>
                    <Typography className={classes.title} variant={'h4'} paragraph>
                        Loading...
                    </Typography>
                    <Box className={classes.load_bar}>
                        <Box className={classes.load_progress} />
                    </Box>
                </motion.div>
            </Backdrop>
        </Portal>
    );
}

export default LoadBar;