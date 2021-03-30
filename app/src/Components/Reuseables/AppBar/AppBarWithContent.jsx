import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { TwoItemAppBar } from "./TwoItemAppBar";
import { ThreeItemAppBar } from "./ThreeItemAppBar";
import { useStyles } from "./AppBarWithContent.jss";

export function AppBarWithContent({
    open,
    theme,
    type,
    className,
    navDrawerWidth,
    toolDrawerWidth,
    children,
}) {
    const classes = useStyles({
        theme: theme,
        navDrawerWidth: navDrawerWidth,
        toolDrawerWidth: toolDrawerWidth,
    });

    return (
        <>
            <Hidden mdUp>
                <Box
                    className={clsx(classes.app_bar, {
                        [className]: className,
                        [classes.appBarCompressedSm]: open,
                        [classes.appBarRelaxedSm]: !open,
                    })}
                >
                    {type === "title" ? (
                        <Typography
                            className={clsx(classes.title, {
                                [className]: className,
                            })}
                        >
                            {children}
                        </Typography>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBar theme={theme} className={className}>
                            {children}
                        </TwoItemAppBar>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBar theme={theme} className={className}>
                            {children}
                        </ThreeItemAppBar>
                    ) : null}
                </Box>
            </Hidden>
            <Hidden smDown>
                <Box
                    className={clsx(classes.app_bar, {
                        [className]: className,
                        [classes.appBarCompressedLg]: open,
                        [classes.appBarRelaxedLg]: !open,
                    })}
                >
                    {type === "title" ? (
                        <Typography
                            className={clsx(classes.title, {
                                [className]: className,
                            })}
                        >
                            {children}
                        </Typography>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBar theme={theme} className={className}>
                            {children}
                        </TwoItemAppBar>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBar theme={theme} className={className}>
                            {children}
                        </ThreeItemAppBar>
                    ) : null}
                </Box>
            </Hidden>
        </>
    );
}
