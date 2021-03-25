import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStyles} from "./MiniVariantDrawer.jss";

export default function MiniVariantDrawer({theme, children}) {

    const classes = useStyles({theme: theme});

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={clsx(classes.root, {
            [classes.icon_extra_width_expanded]: open,
        })}>
            <Drawer
                variant="permanent"
                anchor='right'
                className={clsx(classes.drawer, {
                    [classes.drawerPaper]:true,
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerPaper]:true,
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}
                                className={clsx(classes.chevron, {
                                    [classes.chevronOpen]: open,
                                    [classes.chevronClosed]: ! open,
                                })}
                    >
                        {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {children}
            </Drawer>
        </div>
    );
}
