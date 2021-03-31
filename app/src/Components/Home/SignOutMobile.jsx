import React, {useState} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {AccountCircle} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useStyles } from "./PageLinkMobile.jss";

export function SignOutMobile({signOut, theme}) {
    const [hover, setHover] = useState(false);
    const classes = useStyles({ theme: theme});
    return (
        <Box
            onClick={() => signOut()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={classes.page_link}
        >
            <SvgIcon
                className={clsx(classes.page_icon, {
                    [classes.normal_color]: ! hover,
                    [classes.hover_color]: hover,
                })}
            >
                <AccountCircle />
            </SvgIcon>
            {hover ? (
                <img
                    src={`/Images/text/main menu/mobile/${theme}/hover/Sign Out.svg`}
                    className={classes.page_name}
                    alt={"name and link to page"}
                />
            ) : (
                <img
                    src={`/Images/text/main menu/mobile/${theme}/normal/Sign Out.svg`}
                    className={classes.page_name}
                    alt={"name and link to page"}
                />
            )}
        </Box>
    )
}