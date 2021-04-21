import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./RangeBoardExample.jss";

export function RangeBoardExample(props) {
    const classes = useStyles({theme: props.theme});

    return (
        <Box className={classes.boards_area} paragraph>
            <Box className={classes.example}>
                <Typography className={classes.label} noWrap>
                    {props.label1}
                </Typography>
                <img
                    src={props.src1}
                    alt={props.alt2}
                    className={clsx(classes.board, {
                        [classes.board1]: true,
                    })}
                />
            </Box>
            <Box className={classes.example}>
                <Typography className={classes.label} noWrap>
                    {props.label2}
                </Typography>
                <img
                    src={props.src2}
                    alt={props.alt2}
                    className={classes.board}
                />
            </Box>
        </Box>
    )
}