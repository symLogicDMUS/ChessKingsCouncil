import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { useStyles as useMoreStyles } from "./ResponsiveDrawer.jss";
import { useStyles } from "./PermanentDrawerLeft.jss";

function PermanentDrawerLeft({ isHidden, theme, ariaLabel, children }) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <div className={classes2.drawer} aria-label={ariaLabel}>
            <Drawer
                classes={{
                    paper: clsx(classes.paper, {
                        [classes2.hidden]: isHidden,
                        [classes2.drawerPaper]: !isHidden,
                    }),
                }}
                open={true}
                variant="permanent"
            >
                <div className={classes2.toolbar} />
                <Divider />
                {children}
            </Drawer>
        </div>
    );
}

export default PermanentDrawerLeft;
