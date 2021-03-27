import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {Portal, useTheme} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniVariantDrawer from "./MiniVariantDrawer";
import {toolDrawerWidth, useStyles} from "./ResponsiveDrawer.jss";
import {viewWidth} from "../../helpers/windowMeasurments";
import {AppBarWithSearch} from "../../NewGame/Customize/AppBarWithSearch";

function ResponsiveDrawer({titleBar, navBar, tools, toolButtons, theme, withSearch, updateSearchText, neighborOpen, children}) {
    // const [navDrawerWidth, setNavDrawerWidth] = useState(viewWidth() * 0.18);
    // useEffect(() => {
    //     function handleResize() {
    //         setNavDrawerWidth(viewWidth() * 0.18)
    //     }
    //     window.addEventListener('resize', handleResize)
    //     return _ => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // });

    const classes = useStyles({theme: theme});
    const muiTheme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Hidden mdUp>
                <AppBar position="fixed" className={clsx(classes.appBar, {
                    [classes.appBarCompressed]: open,
                    [classes.appBarRelaxed]: ! open,
                })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {withSearch ? (
                            <AppBarWithSearch
                                open={open}
                                theme={theme}
                                navDrawerWidth={240}
                                updateSearchText={updateSearchText}
                            >
                                {titleBar}
                            </AppBarWithSearch>
                        ) : (titleBar)}
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden smDown>
                <AppBar position="fixed" className={clsx(classes.appBar, {
                    [classes.appBarCompressed]: true,
                })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {withSearch ? (
                            <AppBarWithSearch width={240} updateSearchText={updateSearchText} theme={theme}>
                                {titleBar}
                            </AppBarWithSearch>
                        ) : (titleBar)}
                    </Toolbar>
                </AppBar>
            </Hidden>
            <div className={classes.drawer} aria-label="nav bar component">
                <Hidden mdUp>
                    <Drawer
                        open={open}
                        variant="temporary"
                        anchor={muiTheme.direction === 'rtl' ? 'right' : 'left'}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: clsx(classes.drawerPaper, {
                                [classes.navPersistentPaper]: true,
                            }),
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <div className={classes.toolbar}/>
                        <Divider/>
                        {navBar}
                    </Drawer>
                    <Portal>
                        <MiniVariantDrawer theme={theme}>{toolButtons}</MiniVariantDrawer>
                    </Portal>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        classes={{
                            paper: clsx(classes.navPermanentPaper, {
                                [classes.drawerPaper]: true,
                            }),
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.toolbar}/>
                        <Divider/>
                        {navBar}
                    </Drawer>
                    <Portal>
                        <Drawer
                            classes={{
                                paper: clsx(classes.toolDrawerPaper, {
                                    [classes.drawerPaper]: true,
                                }),
                            }}
                            variant="permanent"
                            anchor='right'
                            open
                        >
                            <div className={classes.toolbar}/>
                            <Box className={classes.tools}>
                                {tools}
                            </Box>
                        </Drawer>
                    </Portal>
                </Hidden>
            </div>
            <main>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
