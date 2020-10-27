import React from "react";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";
// import { getTogleNavWidgetStyle } from "./styles";

export function TogleNav({ togleNav, type, theme, styles }) {

    return (
        <div onClick={() => togleNav()} style={styles} className="togle-nav">
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                //style={getTogleNavWidgetStyle()}
                className="togle-nav-widget-style"
                alt="togle navbar"
            />
        </div>
    );
}
