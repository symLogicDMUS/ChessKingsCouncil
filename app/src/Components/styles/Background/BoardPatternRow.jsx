import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {useStyles} from "./Background.jss";

export function BoardPatternRow(props) {
    const classes = useStyles({theme: props.theme});
    return <Box className={
        clsx(classes.row, {
            [classes.row2]: props.row2,
        })}
    >
        <img src={`/Images/board-pattern/board-pattern-${props.theme}.svg`}
             className={classes.board_pattern}
             alt="stylistic board pattern"
        />
        <img src={`/Images/board-pattern/board-pattern-${props.theme}.svg`}
             className={classes.board_pattern}
             alt="stylistic board pattern"
        />
    </Box>;
}