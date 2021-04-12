import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import {useStyles as useMoreStyles} from "./ResponsiveDrawer.jss";
import { useStyles } from "./PermanentDrawerRight.jss";

function PermanentDrawerRight({isHidden, theme, ariaLabel, children}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme});

    return <div className={classes.drawer} aria-Label={ariaLabel}>
        <Drawer
            classes={{
                paper: clsx(classes.paper, {
                    [classes2.drawerPaper]: ! isHidden,
                    [classes2.hidden]: isHidden,
                }),
            }}
            variant="permanent"
            anchor="right"
            open={true}
        >
            <div className={classes2.toolbar}/>
            <Box className={classes.content}>{children}</Box>
        </Drawer>
    </div>;
}

export default PermanentDrawerRight;