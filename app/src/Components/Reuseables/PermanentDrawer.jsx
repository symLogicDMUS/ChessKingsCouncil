import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {useStyles} from "./PermanentDrawer.jss";

export default function PermanentDrawer({
    width,
    theme,
    content,
    drawerType,
    appBarContent,
    children
}) {
    const classes = useStyles({drawerType: drawerType, width: width, theme: theme});

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.appbar_content}>
                    {appBarContent}
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={drawerType}
            >
                <div className={classes.toolbar} />
                {children}
            </Drawer>
            <main>
                <div className={classes.toolbar} />
                {content}
            </main>
        </div>
    );
}
