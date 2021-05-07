import React from "react";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {useStyles} from "./Background.jss";
import {BoardPatternRow} from "./BoardPatternRow";

export function Background(props) {
    const classes = useStyles()
    return (
        <Portal>
            <div className={classes.background}>
                {props.navBar ? (<div className={classes.navbar}/>) : null}
                {props.appBar ? (<div className={classes.toolbar}/>) : null}
                <BoardPatternRow row2={false} theme={props.theme}/>
                <BoardPatternRow row2={true} theme={props.theme}/>
            </div>
        </Portal>
    )
}

