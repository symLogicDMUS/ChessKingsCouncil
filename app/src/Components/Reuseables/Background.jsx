import React from "react";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {useStyles} from "./Background.jss";

export function Background({style, theme}) {
    const classes = useStyles({style: style})
    return (
        <Portal>
            <div className={classes.background}>
                <Box className={classes.row}>
                    <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                         className={classes.board_pattern}
                         alt="stylistic board pattern"
                    />
                    <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                         className={classes.board_pattern}
                         alt="stylistic board pattern"
                    />
                </Box>
                <Box className={classes.row}>
                    <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                         className={classes.board_pattern}
                         alt="stylistic board pattern"
                    />
                    <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                         className={classes.board_pattern}
                         alt="stylistic board pattern"
                    />
                </Box>
            </div>
        </Portal>
    )
}

