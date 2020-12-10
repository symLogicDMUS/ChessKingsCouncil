import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { icons } from "../styles/icons/top/icons.jss";
import { useStyles } from "./NavBarButton.jss";
import SvgIcon from "@material-ui/core/SvgIcon";

export function NavBarButton({
    path,
    column,
    pageName,
    pageIcon,
    theme,
    isLocalLink,
    unsavedChanges,
    toggleConfirmRedirect,
}) {
    let history = useHistory();
    let pageRedirectMethod = isLocalLink ? () => (window.location.href = path) : () => history.push(path);
    if (unsavedChanges) pageRedirectMethod = () => toggleConfirmRedirect(true, path, isLocalLink);

    const classes = useStyles({ theme: theme, column: column });

    return (
        <div className={classes.nav_bar_button}>
            <Button className={classes.text_button} onClick={pageRedirectMethod}>
                {pageName}
            </Button>
            <IconButton className={classes.icon_button}>
                <SvgIcon>
                    {icons[pageIcon]}
                </SvgIcon>
            </IconButton>
        </div>
    );
}

/*
<Icon>
    <img src={icons[pageIcon]} style={{width: '100%'}} />
</Icon>
*/
