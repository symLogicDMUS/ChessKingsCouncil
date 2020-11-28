import React from "react";
import { getIconColor } from "./getIconColor";
import {styles} from "./NavBar.jss";

export function TogleNav({navExpanded, togleNav, theme }) {

    const type = navExpanded ? "colapse" : "expand";

    return (
        // <div onClick={() => togleNav()} className={this.props.classes.togle_nav}>
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                onClick={() => togleNav()}
                className={this.props.classes.toggle_nav}
                alt="togle navbar"
            />
        // </div>
    );
}
