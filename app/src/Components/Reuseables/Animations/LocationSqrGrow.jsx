import React from "react";
import {motion} from "framer-motion";
import {lighten} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {Typography} from "@material-ui/core";
import { useStyles } from "./LocationSqrGrow.jss";

export function LocationSqrGrow({theme, onAnimationComplete, pieceLoc, isImg, children}) {
    const classes = useStyles({theme: theme, rf: children});
    return (
            <motion.div
                className={classes.square}
                animate={{
                    backgroundColor: [
                        lighten(themes[theme].dark_in_range, 0.8),
                        lighten(themes[theme].dark_in_range, 0.08),
                    ],
                    scale: [0, 1],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 0.7,
                }}
                onAnimationComplete={onAnimationComplete}
            >
                <Typography className={classes.text} variant='button'>{children===pieceLoc ? null : children}</Typography>
            </motion.div>
    );
}