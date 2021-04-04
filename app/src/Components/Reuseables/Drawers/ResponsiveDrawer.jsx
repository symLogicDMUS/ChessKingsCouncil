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
import { viewWidth } from "../../helpers/windowMeasurments";
import { AppBarWithContent } from "../AppBar/AppBarWithContent";
import { useStyles } from "./ResponsiveDrawer.jss";

function ResponsiveDrawer({
    theme,
    tools,
    navBar,
    toolButtons,
    navHorizontal,
    appBarType,
    appBarContent,
    elevation,
    seeMoreIcon,
    seeMoreIcon2,
    children,
}) {
    const [navDrawerWidth, setNavDrawerWidth] = useState(viewWidth() * 0.18);
    const [toolDrawerWidth, setToolDrawerWidth] = useState(viewWidth() * 0.25);
    useEffect(() => {
        function handleResize() {
            if (viewWidth() >= 960) {
                setNavDrawerWidth(viewWidth() * 0.18);
                setToolDrawerWidth(viewWidth() * 0.25);
            }
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({
        theme: theme,
        navDrawerWidth: navDrawerWidth,
        toolDrawerWidth: toolDrawerWidth,
    });
    const muiTheme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden mdUp>
                <AppBar
                    position="fixed"
                    elevation={elevation}
                    className={clsx(classes.appBar, {
                        [classes.appBarSmCompressed]: open,
                        [classes.appBarRelaxed]: !open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <AppBarWithContent
                            open={open}
                            theme={theme}
                            type={appBarType}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                            navDrawerWidth={navDrawerWidth}
                            toolDrawerWidth={toolDrawerWidth}
                        >
                            {appBarContent}
                        </AppBarWithContent>
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
                        <div className={classes.toolbar}/>
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
                        [classes.appBarMdCompressed]: true,
                        [classes.hidden]: navHorizontal
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
                        <AppBarWithContent
                            open={open}
                            theme={theme}
                            type={appBarType}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                            navDrawerWidth={navDrawerWidth}
                            toolDrawerWidth={toolDrawerWidth}
                        >
                            {appBarContent}
                        </AppBarWithContent>
                    </Toolbar>
                </AppBar>
                <div className={classes.drawer} aria-label="nav bar component">
                    <Drawer
                        classes={{
                            paper: clsx(classes.navPermanentPaper, {
                                [classes.hidden]: navHorizontal,
                                [classes.drawerPaper]: ! navHorizontal,
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
                {navHorizontal ? (navBar) : <div className={classes.toolbar}/>}
                {children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
