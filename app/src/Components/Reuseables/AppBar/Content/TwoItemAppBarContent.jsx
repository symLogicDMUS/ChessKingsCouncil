import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { MoreVert } from "@material-ui/icons";
import { SeeMore } from "../../UserInput/SeeMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SignInOutButton from "../../../Home/SignInOutButton";
import { useStyles } from "./TwoItemAppBarContent.jss";

export function TwoItemAppBarContent({
    theme,
    className,
    seeMoreIcon,
    children,
}) {
    const lg = useMediaQuery("(min-width:768px)");
    const sm = useMediaQuery("(max-width: 768px)");

    const classes = useStyles({ theme: theme });

    return (
        <>
            {sm && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    {children[0]}
                    <SeeMore
                        theme={theme}
                        icon={
                            seeMoreIcon ? (
                                seeMoreIcon
                            ) : (
                                <MoreVert className={classes.icon} />
                            )
                        }
                    >
                        {children[1]}
                    </SeeMore>
                    <SignInOutButton theme={theme} hasNeighbor />
                </Box>
            )}
            {lg && (
                <Box
                    className={clsx(classes.content, {
                        [className]: className,
                    })}
                >
                    {children[0]}
                    {children[1]}
                    <SignInOutButton theme={theme} hasNeighbor />
                </Box>
            )}
        </>
    );
}
