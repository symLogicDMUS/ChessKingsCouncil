import React, {useEffect} from "react";
import clsx from "clsx";
import "../Background/_backgrounds.scss";
import Box from "@material-ui/core/Box";
import {AnimatePresence} from "framer-motion";
import {loading_path} from "./loading_path";
import {useStyles as useMoreStyles} from "../Background/Background.jss";
import { useStyles } from "./Loading.jss";

export function Loading() {
    useEffect(() => {
        document.body.className = 'tan-background';
    }, [])

    const classes = useStyles()
    const classes2 = useMoreStyles({theme: 'tan'})

    return (
        <div className={classes.body}>
            <Box className={clsx(classes.board_pattern_area, {
                [classes.row1]: true,
            })}>
                <img src={'/Images/Backgrounds/board-pattern-tan.svg'}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
                <img src={'/Images/Backgrounds/board-pattern-tan.svg'}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
            </Box>
            <Box className={classes.content}>
                <AnimatePresence>
                    <div className={classes.animation}>
                        {loading_path}
                    </div>
                </AnimatePresence>
            </Box>
            <Box className={classes.board_pattern_area}>
                <img src={`/Images/Backgrounds/board-pattern-tan.svg`}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
                <img src={'/Images/Backgrounds/board-pattern-tan.svg'}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
            </Box>
        </div>
    );

}