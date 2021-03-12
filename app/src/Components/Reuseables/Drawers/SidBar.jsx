import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./SidBar.jss";

export function SideBar({theme, drawerType, children}) {
    const classes = useStyles({theme, drawerType})
    return (
        <div className={classes.root}>
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
        </div>
    );
}
