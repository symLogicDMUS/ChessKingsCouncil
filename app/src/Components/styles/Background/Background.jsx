import React from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import {BoardPatternRow} from "./BoardPatternRow";
import {useStyles} from "./Background.jss";

export function Background(props) {
    const classes = useStyles()
    return (
        <Portal>
            <div className={classes.background}>
                <div
                    className={
                        clsx(null, {
                            [classes.navbar]: props.navBar,
                            [classes.toolbar]: props.appBar,
                            [classes.lgScreenBar]: props.lgScreenBar,
                            [classes.navWithTabs]: props.navWithTabs,
                        })}
                />
                <BoardPatternRow row2={false} theme={props.theme}/>
                <BoardPatternRow row2={true} theme={props.theme}/>
            </div>
        </Portal>
    )
}