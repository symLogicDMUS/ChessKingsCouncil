import React from "react";
import { getTogleNavWidgetStyle } from "./styles";
import { getIconColor } from "./getIconColor";

export function TogleNav({ togleNav, type, theme, styles }) {

    return (
        <div onClick={() => togleNav()} style={styles}>
            <img
                src={`/Images/nav-button/nav-${type}-button-${getIconColor(theme)}.svg`}
                style={getTogleNavWidgetStyle()}
                alt="togle navbar"
            />
        </div>
    );
}
