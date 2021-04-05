import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Portal, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import MiniVariantDrawer from "./MiniVariantDrawer";
import { useStyles } from "./ResponsiveDrawer.jss";

function ResponsiveDrawer({
    theme,
    navBar,
    tools,
    toolButtons,
    navHorizontal,
    appBarContent,
    elevation,
    className,
    children,
}) {
    const classes = useStyles({ theme: theme });
    const muiTheme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div
            className={clsx(classes.root, {
                [className]: className,
            })}
        >
            <CssBaseline />
            <Hidden mdUp>
                <AppBar
                    position="fixed"
                    elevation={elevation}
                    className={clsx(classes.appBar, {
                        [classes.appBarCompressed]: open,
                        [classes.appBarRelaxed]: !open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        {appBarContent}
                    </Toolbar>
                </AppBar>
                <div className={classes.drawer} aria-label="nav bar component">
                    <Drawer
                        open={open}
                        variant="temporary"
                        anchor={muiTheme.direction === "rtl" ? "right" : "left"}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: clsx(classes.drawerPaper, {
                                [classes.navPersistentPaper]: true,
                                [classes.hidden]: navHorizontal,
                            }),
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        {navBar}
                    </Drawer>
                    {toolButtons && (
                        <Portal>
                            <MiniVariantDrawer theme={theme}>
                                {toolButtons}
                            </MiniVariantDrawer>
                        </Portal>
                    )}
                </div>
            </Hidden>
            <Hidden smDown>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarLg]: true,
                        [classes.hidden]: navHorizontal,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        {appBarContent}
                    </Toolbar>
                </AppBar>
                <div className={classes.drawer} aria-label="nav bar component">
                    <Drawer
                        classes={{
                            paper: clsx(classes.navPermanentPaper, {
                                [classes.hidden]: navHorizontal,
                                [classes.drawerPaper]: !navHorizontal,
                            }),
                        }}
                        open
                        variant="permanent"
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        {navBar}
                    </Drawer>
                    <Portal>
                        <Drawer
                            classes={{
                                paper: clsx(classes.toolDrawerPaper, {
                                    [classes.drawerPaper]: true,
                                    [classes.hidden]: navHorizontal,
                                }),
                            }}
                            variant="permanent"
                            anchor="right"
                            open
                        >
                            <div className={classes.toolbar} />
                            <Box className={classes.tools}>{tools}</Box>
                        </Drawer>
                    </Portal>
                </div>
            </Hidden>
            <main className={classes.main}>
                {navHorizontal ? navBar : <div className={classes.toolbar} />}
                {children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
