import React from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./NavBarButtonAlt.jss";

export function NavBarButtonAlt({
    path,
    isLocalLink,
    pageIcon,
    theme,
    children,
}) {
    const history = useHistory();

    const classes = useStyles({ theme });

    const goToPage = () => {
        if (isLocalLink) {
            history.push(path);
        } else window.location.href = path;
    };

    return (
        <Box className={classes.nav_bar_button} onClick={goToPage}>
            <SvgIcon className={classes.icon}>{icons[pageIcon]}</SvgIcon>
            <Typography className={classes.text} variant="button">
                {children}
            </Typography>
        </Box>
    );
}
