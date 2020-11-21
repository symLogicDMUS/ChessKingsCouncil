import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";

export function NavBarButton({
    path,
    pageName,
    isLocalLink,
    unsavedChanges,
    toggleConfirmRedirect,
    classes,
    pageIcon,
    theme,
}) {
    
    let history = useHistory();
    let pageRedirectMethod = isLocalLink ? () => (window.location.href = path) : () => history.push(path);
    if (unsavedChanges) pageRedirectMethod = () => toggleConfirmRedirect(true, path, isLocalLink);

    return (
        <div
            className={classes.button}
            onClick={pageRedirectMethod}
        >
            <div className={classes["icon-container"]}>
                <img
                    src={`/Images/Navbar/${pageIcon}-invert-${getIconColor(theme)}.svg`}
                    className="nav-bar-icon-style"
                    alt=""
                />
            </div>
            <div className={classes.text}>{pageName}</div>
        </div>
    );
}
