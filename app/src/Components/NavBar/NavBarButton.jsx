import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { icons } from "../styles/icons/top/icons.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fontSize } from "../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import { useStyles } from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    theme,
    isLocalLink,
    unsavedChanges,
    toggleConfirmRedirect,
    flexDirection,
}) {
    let history = useHistory();
    let pageRedirectMethod = isLocalLink ? () => (window.location.href = path) : () => history.push(path);
    if (unsavedChanges) pageRedirectMethod = () => toggleConfirmRedirect(true, path, isLocalLink);

    const classes = useStyles({ theme: theme, fontSize: fontSize, flexDirection: flexDirection });

    return (
        <Button className={classes.nav_bar_button} onClick={pageRedirectMethod}>
            <Box className={classes.box}>
                <SvgIcon className={classes.icon}>{icons[pageIcon]}</SvgIcon>
                <div className={classes.text}>{pageName}</div>
            </Box>
        </Button>
    );
}
