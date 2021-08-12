import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { useStyles as useMoreStyles } from "./ResponsiveDrawer.jss";
import { useStyles } from "./PersistantDrawerLeft.jss";

function PersistentDrawerLeft({
    open,
    handleDrawerToggle,
    isHidden,
    theme,
    children,
}) {
    const muiTheme = useTheme();
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <div className={classes.drawer} aria-label="nav bar component">
            <Drawer
                open={open}
                variant="temporary"
                anchor={muiTheme.direction === "rtl" ? "right" : "left"}
                onClose={handleDrawerToggle}
                classes={{
                    paper: clsx(classes2.drawerPaper, {
                        [classes.paper]: true,
                        [classes2.hidden]: isHidden,
                    }),
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div className={classes2.toolbar} />
                <Divider />
                {children}
            </Drawer>
        </div>
    );
}

export default PersistentDrawerLeft;
