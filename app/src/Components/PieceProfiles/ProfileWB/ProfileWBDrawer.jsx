import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { useStyles } from "./ProfileWBDrawer.jss";

export function ProfileWBDrawer({theme, isActive, children}) {

    const classes = useStyles({theme});

    return (
        <div>
            <div className={clsx(classes.root, {
                [classes.root_inactive]: ! isActive
            })}>
                <div className={classes.wrapper}>
                    <Slide direction="left" in={isActive} mountOnEnter unmountOnExit>
                        <Paper elevation={4} className={classes.paper}>
                            <div className={classes.drawer}>
                                {isActive ? (children) : null}
                            </div>
                        </Paper>
                    </Slide>
                </div>
            </div>
        </div>
    );
}