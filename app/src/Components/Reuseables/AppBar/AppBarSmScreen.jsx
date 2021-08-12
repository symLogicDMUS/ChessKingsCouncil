import clsx from "clsx";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useStyles as useMoreStyles } from "../Drawers/ResponsiveDrawer.jss";
import { useStyles } from "./AppBarSmScreen.jss";

function AppBarSmScreen(props) {
    const {
        open,
        isIconColumn,
        handleDrawerToggle,
        className,
        children,
        theme,
        ...other
    } = props;

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <AppBar
            position="fixed"
            className={clsx(classes2.appBar, {
                [classes.appBarCompressed1]: open && !isIconColumn,
                [classes.appBarRelaxed1]: !open && !isIconColumn,
                [classes.appBarCompressed2]: open && isIconColumn,
                [classes.appBarRelaxed2]: !open && isIconColumn,
                [className]: className,
            })}
            {...other}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    className={classes2.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                {children}
            </Toolbar>
        </AppBar>
    );
}
export default AppBarSmScreen;
