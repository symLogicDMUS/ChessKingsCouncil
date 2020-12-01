import React from "react";
import { getIconColor } from "./getIconColor";
import { useStyles } from "./ToggleNav.jss";

export function ToggleNav({navExpanded, toggleNav, theme }) {

    const type = navExpanded ? "colapse" : "expand";
    const classes = useStyles()

    return (
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                onClick={() => toggleNav()}
                className={classes.toggle_nav}
                alt="toggle navbar"
            />
    );
}
