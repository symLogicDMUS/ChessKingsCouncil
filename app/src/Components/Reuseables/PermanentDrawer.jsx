import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {useStyles} from "./PermanentDrawer.jss";

export default function PermanentDrawer({
                                            theme,
                                            content,
                                            drawerType,
                                            appBarContent,
                                            children
                                        }) {
    const classes = useStyles({drawerType: drawerType, theme: theme});

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.appbar_content}>
                    {appBarContent}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={drawerType}
            >
                <div className={classes.toolbar}/>
                {children}
            </Drawer>
            <div className={classes.toolbar}/>
            {content}
        </div>
    );
}
