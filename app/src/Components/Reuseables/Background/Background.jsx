import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {useStyles} from "./Background.jss";

export function Background(props) {
    const classes = useStyles()
    return (
        <Portal>
            <div className={classes.background}>
                {props.navBar ? (<div className={classes.navbar} />) : null}
                {props.appBar ? (<div className={classes.toolbar} />) : null}
                    <Box className={classes.row}>
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                    </Box>
                    <Box className={clsx(classes.row, {
                        [classes.row2]: true,
                    })}>
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                </Box>
            </div>
        </Portal>
    )
}

