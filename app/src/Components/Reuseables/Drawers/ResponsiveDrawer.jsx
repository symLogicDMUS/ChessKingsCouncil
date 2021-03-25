import React from 'react';
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
import { useStyles } from "./ResponsiveDrawer.jss";
import clsx from "clsx";

function ResponsiveDrawer({titleBar, navBar, tools, toolButtons, children}) {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon  />
                    </IconButton>
                    {titleBar}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.navDrawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        {navBar}
                    </Drawer>
                    <Portal>
                        <MiniVariantDrawer>{toolButtons}</MiniVariantDrawer>
                    </Portal>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        classes={{
                            paper: clsx(classes.navDrawerPaper, {
                                [classes.drawerPaper]:true,
                            }),
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        {navBar}
                    </Drawer>
                    <Portal>
                        <Drawer
                            classes={{
                                paper: clsx(classes.toolDrawerPaper, {
                                    [classes.drawerPaper]:true,
                                }),
                            }}
                            variant="permanent"
                            anchor='right'
                            open
                        >
                            {tools}
                        </Drawer>
                    </Portal>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
