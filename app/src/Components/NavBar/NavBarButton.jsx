import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { icons } from "../styles/icons/top/icons.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import { fontSize } from "../styles/fontSize.jss";
import { useStyles } from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    theme,
    style,
    parentFlex,
    isLocalLink,
    unsavedChanges,
    toggleConfirmRedirect,
}) {
    let history = useHistory();
    let pageRedirectMethod = isLocalLink
        ? () => (window.location.href = path)
        : () => history.push(path);
    if (unsavedChanges)
        pageRedirectMethod = () =>
            toggleConfirmRedirect(true, path, isLocalLink);

    let [hover, setHover] = useState(false);

    const classes = useStyles({
        theme: theme,
        style: style,
        parentFlex: parentFlex,
    });

    return (
        <Button
            className={classes.nav_bar_button}
            onClick={pageRedirectMethod}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box className={classes.box}>
                <SvgIcon className={hover ? classes.icon_hover : classes.icon}>
                    {icons[pageIcon]}
                </SvgIcon>
                <div className={hover ? classes.text_hover : classes.text}>
                    {pageName}
                </div>
            </Box>
        </Button>
    );
}
