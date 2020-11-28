import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getIconColor } from "./getIconColor";
import {useStyles} from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    isLocalLink,
    unsavedChanges,
    toggleConfirmRedirect,
    pageIcon,
    theme,
}) {
    
    let history = useHistory();
    let pageRedirectMethod = isLocalLink ? () => (window.location.href = path) : () => history.push(path);
    if (unsavedChanges) pageRedirectMethod = () => toggleConfirmRedirect(true, path, isLocalLink);

    const classes = useStyles()

    return (
        <div
            className={classes[pageName]}
            onClick={pageRedirectMethod}
        >
            <div className={classes.icon}>
                <img
                    src={`/Images/Navbar/${pageIcon}-invert-${getIconColor(theme)}.svg`}
                    className={classes.page_link_image}
                    alt=""
                />
            </div>
            <div className={classes.text}>{pageName}</div>
        </div>
    );
}
