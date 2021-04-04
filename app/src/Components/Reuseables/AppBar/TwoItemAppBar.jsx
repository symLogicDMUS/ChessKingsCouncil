import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SeeMore} from "../UserInput/SeeMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles as useMoreStyles} from "./AppBarWithContent.jss";
import { useStyles } from "./TwoItemAppBar.jss";

export function TwoItemAppBar({open, navDrawerWidth, toolDrawerWidth, theme, className, seeMoreIcon, children}) {
    const sm = useMediaQuery("(max-width: 500px)");
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
                [classes2.appBarRelaxed]: ! open,
            })}
        >
            <div className={classes.child1}>
                {children[0]}
            </div>
            {sm ? (
                <SeeMore theme={theme} icon={seeMoreIcon}>
                    {children[1]}
                </SeeMore>
            ) : (
                <div className={classes.child2}>
                    {children[1]}
                </div>
            )}
        </Box>
    );
}