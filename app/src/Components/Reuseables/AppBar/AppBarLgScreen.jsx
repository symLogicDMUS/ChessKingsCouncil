import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {useStyles as useMoreStyles} from "../Drawers/ResponsiveDrawer.jss";
import { useStyles } from "./AppBarLgScreen.jss";

function AppBarLgScreen(props) {
    const {theme, isHidden, onMenuButtonClick, className, children, ...other} = props;
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    return (
        <AppBar
            position="fixed"
            className={clsx(classes2.appBar, {
                [classes.appBarLg]: true,
                [classes2.hidden]: isHidden,
                [className]: className,
            })}
            {...other}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes2.menuButton}
                    onClick={onMenuButtonClick}
                >
                    <MenuIcon />
                </IconButton>
                {children}
            </Toolbar>
        </AppBar>
    );
}

export default AppBarLgScreen;