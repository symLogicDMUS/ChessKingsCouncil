import React from "react";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";
// import { getTogleNavWidgetStyle } from "./styles";

export function TogleNav({ togleNav, type, theme, styles }) {

    return (
        <div onClick={() => togleNav()} style={styles}>
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                className="togle-nav"
                //style={getTogleNavWidgetStyle()}
                alt="togle navbar"
            />
        </div>
    );
}
