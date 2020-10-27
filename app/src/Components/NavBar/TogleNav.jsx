import React from "react";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";

export function TogleNav({navExpanded, togleNav, theme }) {

    const type = navExpanded ? "colapse" : "expand";

    return (
        <div onClick={() => togleNav()} className="togle-nav">
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                className="togle-nav-widget-style"
                alt="togle navbar"
            />
        </div>
    );
}
