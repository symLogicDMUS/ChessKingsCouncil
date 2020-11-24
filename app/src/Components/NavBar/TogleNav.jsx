import React from "react";
import { getIconColor } from "./getIconColor";
import {styles} from "./NavBar.jss";

export function TogleNav({navExpanded, togleNav, theme }) {

    const type = navExpanded ? "colapse" : "expand";

    return (
        // <div onClick={() => togleNav()} className="togle-nav">
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                onClick={() => togleNav()}
                className="toggle-nav"
                alt="togle navbar"
            />
        // </div>
    );
}
