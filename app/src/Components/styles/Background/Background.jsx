import React from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import {useStyles} from "./Background.jss";
import {BoardPatternRow} from "./BoardPatternRow";

export function Background(props) {
    const classes = useStyles()
    return (
        <Portal>
            <div className={classes.background}>
                <div
                    className={
                        clsx(null, {
                            [classes.navbar]: props.navBar,
                            [classes.toolbar]: props.toolbar,
                        })}
                />
                <BoardPatternRow row2={false} theme={props.theme}/>
                <BoardPatternRow row2={true} theme={props.theme}/>
            </div>
        </Portal>
    )
}