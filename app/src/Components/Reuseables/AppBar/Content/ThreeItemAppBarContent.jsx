import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SeeMore} from "../../UserInput/SeeMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SignInOutButton from "../../../Home/SignInOutButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {useStyles} from "./ThreeItemAppBarContent.jss";

export function ThreeItemAppBarContent({className, theme, seeMoreIcon, seeMoreIcon2, children}) {

    const lg = useMediaQuery("(min-width:960px)");
    const md = useMediaQuery("(min-width:580px) and (max-width:960px)");
    const sm = useMediaQuery("(max-width: 580px)");

    const classes = useStyles();

    return (
        <>
            {lg && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    <div className={classes.item}>{children[0]}</div>
                    <div className={classes.item}>{children[1]}</div>
                    <div className={classes.item}>{children[2]}</div>
                    <SignInOutButton theme={theme} />
                </Box>
            )}
            {md && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className
                    })}
                >
                    <div className={classes.item}>{children[0]}</div>
                    <div className={classes.item}>{children[1]}</div>
                    <SeeMore theme={theme} icon={seeMoreIcon2} className={classes.item}>
                        {children[2]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={<AccountBoxIcon />}>
                        <SignInOutButton theme={theme} />
                    </SeeMore>
                </Box>
            )}
            {sm && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className
                    })}
                >
                    <div className={classes.item}>{children[0]}</div>
                    <SeeMore theme={theme} icon={seeMoreIcon} className={classes.item} >
                        {children[1]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={seeMoreIcon2} className={classes.item}>
                        {children[2]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={<AccountBoxIcon />}>
                        <SignInOutButton theme={theme} />
                    </SeeMore>
                </Box>
            )}
        </>
    );
}