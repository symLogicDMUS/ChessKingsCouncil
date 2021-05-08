import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SeeMore} from "../../UserInput/SeeMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SignInOutButton from "../../../Home/SignInOutButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {useStyles} from "./ThreeItemAppBarContent.jss";

export function ThreeItemAppBarContent({className, theme, seeMoreIcon, seeMoreIcon2, see1, see2, see3, children}) {

    const lg = useMediaQuery("(min-width:1120px)");
    const md = useMediaQuery("(min-width:600px) and (max-width:1120px)");
    const sm = useMediaQuery("(max-width: 600px)");

    const classes = useStyles({theme});

    return (
        <>
            {lg && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    {children[0]}
                    {children[1]}
                    {children[2]}
                    <SignInOutButton theme={theme} />
                </Box>
            )}
            {md && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className
                    })}
                >
                    {children[0]}
                    {children[1]}
                    <SeeMore theme={theme} icon={seeMoreIcon2} className={see2} >
                        {children[2]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={<AccountBoxIcon />} className={see3}>
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
                    {children[0]}
                    <SeeMore theme={theme} icon={seeMoreIcon} className={see1} >
                        {children[1]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={seeMoreIcon2} className={see2}>
                        {children[2]}
                    </SeeMore>
                    <SeeMore theme={theme} icon={<AccountBoxIcon />} className={see3}>
                        <SignInOutButton theme={theme} />
                    </SeeMore>
                </Box>
            )}
        </>
    );
}