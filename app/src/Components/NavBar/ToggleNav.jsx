import React from "react";
import {IconButton} from "@material-ui/core";
import {NavigateNext} from "@material-ui/icons";
import {useStyles} from "./ToggleNav.jss";

export function ToggleNav({navExpanded, toggleNav, theme}) {

    //const type = navExpanded ? "colapse" : "expand";
    const classes = useStyles({theme})

    return (
        <div className={classes.toggle_nav}>
            <IconButton className={classes.icon} onClick={() => toggleNav()} aria-label="toggle-nav">
                <NavigateNext fontSize="inherit"/>
            </IconButton>
        </div>
    )
}