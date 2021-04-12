import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { PageTitle } from "../PageTitle";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { TwoItemAppBarContent } from "./TwoItemAppBarContent";
import { ThreeItemAppBarContent } from "./ThreeItemAppBarContent";
import { useStyles } from "./AppBarContent.jss";

export function AppBarContent({
    open,
    theme,
    type,
    className,
    seeMoreIcon,
    seeMoreIcon2,
    children,
}) {
    const classes = useStyles({theme: theme});

    return (
        <>
            <Hidden mdUp>
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    {type === "title" ? (
                        <PageTitle theme={theme} className={className}>
                            {children}
                        </PageTitle>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBarContent
                            open={open}
                            theme={theme}
                            className={className}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                        >
                            {children}
                        </TwoItemAppBarContent>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBarContent
                            open={open}
                            theme={theme}
                            className={className}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                        >
                            {children}
                        </ThreeItemAppBarContent>
                    ) : null}
                </Box>
            </Hidden>
            <Hidden smDown>
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    {type === "title" ? (
                        <Typography
                            variant="h6"
                            className={clsx(classes.title, {
                                [className]: className,
                            })}
                        >
                            {children}
                        </Typography>
                    ) : null}
                    {type === "2item" ? (
                        <TwoItemAppBarContent
                            open={open}
                            theme={theme}
                            className={className}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                        >
                            {children}
                        </TwoItemAppBarContent>
                    ) : null}
                    {type === "3item" ? (
                        <ThreeItemAppBarContent
                            open={open}
                            theme={theme}
                            className={className}
                            seeMoreIcon={seeMoreIcon}
                            seeMoreIcon2={seeMoreIcon2}
                        >
                            {children}
                        </ThreeItemAppBarContent>
                    ) : null}
                </Box>
            </Hidden>
            {type === "custom" ? <>{children}</> : null}
        </>
    );
}
