import React from "react";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {NavBarExample} from "../NavBar/NavBarExample";
import {useStyles} from "./Background.jss";

export function Background(props) {
    const classes = useStyles({style: props.style})
    return (
        <Portal>
            <div className={props.isFixed ? classes.background_fixed : classes.background}>
                {props.navBar ? (<NavBarExample currentPage={props.currentPage} theme={props.theme} screenCase='desktop' />) : null}
                {props.toolBar ? (<div className={classes.toolbar} />  ) : null}
                {props.appBar ? (<div className={classes.drawerHeader} />) : null}
                    <Box className={classes.row1}>
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                        <img src={`/Images/Backgrounds/board-pattern-${props.theme}.svg`}
                             className={classes.board_pattern}
                             alt="stylistic board pattern"
                        />
                    </Box>
                    <Box className={classes.row2}>
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

