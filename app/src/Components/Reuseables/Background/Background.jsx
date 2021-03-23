import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {NavBarExample} from "../NavBar/NavBarExample";
import {useStyles} from "./Background.jss";

export function Background(props) {
    const classes = useStyles({style: props.style})
    return (
        <Portal>
            <div className={classes.background}>
                {props.navBar ? (<NavBarExample currentPage={props.currentPage} theme={props.theme} screenCase='desktop' />) : null}
                {props.appBar ? (<div className={classes.drawerHeader} />) : null}
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

