import React, {useState} from "react";
import {AccountCircle} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {fontSize0040 as fontSize} from "../styles/fontSizes.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function SignOutMobile({signOut, theme, style, iconStyle}) {
    let [hover, setHover] = useState();
    const classes = useStyles({ theme: theme, fontSize: fontSize });
    return (
        <Box
            className={classes.page_link}
            onClick={() => signOut()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={style}
        >
            <SvgIcon
                className={
                    hover ? classes.page_icon_hover : classes.page_icon_normal
                }
                style={iconStyle}
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