import React, {useState} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SeeMore} from "../UserInput/SeeMore";
import SearchIcon from "@material-ui/icons/Search";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles as useMoreStyles} from "../UserInput/SeeMore.jss";
import {useStyles} from "./ThreeItemAppBar.jss";

export function ThreeItemAppBar({className, theme, seeMoreIcon, seeMoreIcon2, children}) {

    const lg = useMediaQuery("(min-width:960px)");
    const md = useMediaQuery("(min-width:580px) and (max-width:960px)");
    const sm = useMediaQuery("(max-width: 580px)");

    const classes = useStyles();
    const classes2 = useMoreStyles({theme: theme});

    const getComponent = () => {
        if (lg) {
            return (
                <Box
                    className={clsx(classes.appBar, {
                        [classes.appBarLg]: true,
                        [className]: className,
                    })}
                >
                    <Box className={clsx(classes.itemBox, {[classes.widthSqrItemSizeLg]: true})}>
                        {children[0]}
                    </Box>
                    <Box className={clsx(classes.itemBox, {[classes.widthSqrItemSizeLg]: true})}>
                        {children[1]}
                    </Box>
                    <Box className={clsx(classes.itemBox, {[classes.widthSqrItemSizeLg]: true})}>
                        {children[2]}
                    </Box>
                </Box>
            )
        }

        if (md) {
            return (
                <Box
                    className={clsx(classes.appBar, {
                        [classes.appBarMd]: true,
                        [classes.marginRight]: true,
                        [className]: className
                    })}
                >
                    <Box className={clsx(classes.itemBox, {[classes.justifyStart]: true})}>
                        {children[0]}
                    </Box>
                    <Box className={clsx(classes.itemBox, {
                        [classes.justifyEndAndGrow]: true,
                    })}>
                        <SeeMore theme={theme} icon={seeMoreIcon}>
                            {children[1]}
                        </SeeMore>
                        {children[2]}
                    </Box>
                </Box>
            )
        }

        if (sm) {
            return (
                <Box
                    className={clsx(classes.appBar, {
                        [classes.appBarSm]: true,
                        [className]: className
                    })}
                >
                    <Box className={clsx(classes.itemBox, {[classes.justifyStart]: true})}>
                        {children[0]}
                    </Box>
                    <Box className={clsx(classes.itemBox, {[classes.justifyEndAndGrow]: true})}>
                        <SeeMore theme={theme} icon={seeMoreIcon}>
                            {children[1]}
                        </SeeMore>
                        <SeeMore theme={theme} icon={seeMoreIcon2}>
                            {children[2]}
                        </SeeMore>
                    </Box>
                </Box>
            )
        }
    };

    return (
        <>
            {getComponent()}
        </>
    );
}