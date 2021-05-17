import React, {useState} from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {useStyles} from "./TemporaryDrawerButton.jss";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

export default function TemporaryDrawerButton({ theme, className, drawerClassName, edge, rowExpand, children }) {
    const classes = useStyles({theme});

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(open);
    };

    return (
        <React.Fragment>
            <IconButton
                onClick={toggleDrawer( true)}
                className={!!className ? className : null}
                edge={edge}
            >
                <MenuIcon className={classes.icon} />
            </IconButton>
            <Drawer
                open={open}
                anchor={"left"}
                className={clsx(classes.root, {
                    [drawerClassName]: drawerClassName,
                })}
                onClose={toggleDrawer(false)}
            >
                {children}
            </Drawer>
        </React.Fragment>
    );
}
