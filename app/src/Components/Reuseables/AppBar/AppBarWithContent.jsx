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
    seeMoreIcon,
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
                            variant='h6'
                            className={clsx(classes.title, {
                                [className]: className,
                            })}
                        >
                            {children}
                        </Typography>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBar open={open} theme={theme} className={className} seeMoreIcon={seeMoreIcon}>
                            {children}
                        </TwoItemAppBar>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBar open={open} theme={theme} className={className} seeMoreIcon={seeMoreIcon}>
                            {children}
                        </ThreeItemAppBar>
                    ) : null}
                    {type === "custom" ? (
                        <>
                            {children}
                        </>
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
                            variant='h6'
                            className={clsx(classes.title, {
                                [className]: className,
                            })}
                        >
                            {children}
                        </Typography>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBar open={open} theme={theme} className={className} seeMoreIcon={seeMoreIcon}>
                            {children}
                        </TwoItemAppBar>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBar open={open} theme={theme} className={className} seeMoreIcon={seeMoreIcon}>
                            {children}
                        </ThreeItemAppBar>
                    ) : null}
                    {type === "custom" ? (
                        <>
                            {children}
                        </>
                    ) : null}
                </Box>
            </Hidden>
        </>
    );
}
