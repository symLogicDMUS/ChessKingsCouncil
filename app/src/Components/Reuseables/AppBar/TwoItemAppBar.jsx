import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { useStyles } from "./TwoItemAppBar.jss";
import {useStyles as useMoreStyles} from "./AppBarWithContent.jss";

export function TwoItemAppBar({open, navDrawerWidth, toolDrawerWidth, theme, className, children}) {

    const classes = useStyles()

    const classes2 = useMoreStyles({
        theme: theme,
        navDrawerWidth: navDrawerWidth,
        toolDrawerWidth: toolDrawerWidth,
    });

    return (
        <Box
            className={clsx(classes.two_item_app_bar, {
                [className]: className,
                [classes2.appBarMdCompressed]: open,
                [classes2.appBarRelaxed]: !open,
            })}
        >
            {children}
        </Box>
    );
}