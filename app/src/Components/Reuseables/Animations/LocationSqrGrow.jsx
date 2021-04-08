import React from "react";
import { motion } from "framer-motion";
import { lighten } from "@material-ui/core/styles";
import { themes } from "../../styles/themes.jss";
import { useStyles } from "./LocationSqrGrow.jss";
import { Grow, Typography } from "@material-ui/core";

export function LocationSqrGrow({ theme, onAnimationComplete, pieceLoc, isImg, children }) {
    const classes = useStyles({ theme: theme, rf: children });
    return (
        <Grow
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 700, exit: 700 }}
        >
            <motion.div
                className={classes.square}
                animate={{
                    backgroundColor: [
                        lighten(themes[theme].dark_in_range, 0.6),
                        lighten(themes[theme].dark_in_range, 0.08),
                    ],
                }}
                transition={{
                    duration: 0.7,
                }}
                onAnimationComplete={onAnimationComplete}
            >
                <Typography className={classes.text} variant='button'>
                    {children===pieceLoc && isImg ? null : children}
                </Typography>
            </motion.div>
        </Grow>
    );
}
