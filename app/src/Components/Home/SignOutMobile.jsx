import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {AccountCircle} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import {adjuster, iconAdjuster} from "./SignOutMobile.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function SignOutMobile({signOut, theme}) {
    let [hover, setHover] = useState();
    const classes = useStyles({ theme: theme});
    return (
        <Box
            onClick={() => signOut()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={classes.page_link}
            style={adjuster()}
        >
            <SvgIcon
                className={
                    hover ? classes.page_icon_hover : classes.page_icon_normal
                }
                style={iconAdjuster()}
            >
                <AccountCircle />
            </SvgIcon>
            <img
                src={`/Images/text/main menu/mobile/${theme}/${hover ? 'hover' : 'normal'}/Sign Out.svg`}
                className={classes.page_name}
            />
        </Box>
    )
}