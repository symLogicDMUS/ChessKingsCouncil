import React from "react";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import {PageTitle} from "./PageTitle";
import SignInOutButton from "../../Home/Sign In/SignInOutButton";
import {marginLeft, useStyles } from "./AppBarTitle.jss";

export function AppBarTitle({theme, className, children}) {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.appBar, {
            [className]: className,
        })}>
            <PageTitle theme={theme}>
                {children}
            </PageTitle>
            <SignInOutButton theme={theme} style={marginLeft} />
        </Box>
    )
}
