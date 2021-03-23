import React, {useEffect, useState} from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./PersistentDrawer.jss";
import {viewWidth} from "../../helpers/windowMeasurments";

export default function PersistentDrawer({
    drawer,
    theme,
    spacing,
    addedRoot,
    drawerType,
    neighborOpen,
    appBarContent,
    children,
}) {

    const [drawerWidth, setDrawerWidth] = useState(viewWidth() * 0.45);
    useEffect(() => {
        function handleResize() {
            setDrawerWidth(viewWidth() * 0.45)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    const muiTheme = useTheme();

    const classes = useStyles({
        theme: theme,
        spacing: spacing,
        drawerWidth: drawerWidth
    });

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={clsx(classes.root, {
            [addedRoot]: addedRoot,
        })}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes.appBarNeighborShift]: neighborOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    {appBarContent}
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor={drawerType}
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton
                        onClick={handleDrawerClose}
                        className={classes.openCloseIcons}
                    >
                        {muiTheme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                {drawer}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
}
