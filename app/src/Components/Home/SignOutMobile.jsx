import React, {useState} from "react";
import {AccountCircle} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {mobileMainMenuOption as fontSize} from "../styles/fontSize.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function SignOutMobile({signOut, theme}) {
    let [hover, setHover] = useState();
    const classes = useStyles({ theme: theme, fontSize: fontSize });
    return (
        <Box
            className={classes.page_link}
            onClick={() => signOut()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <SvgIcon
                className={
                    hover ? classes.page_icon_hover : classes.page_icon_normal
                }
            >
                <AccountCircle />
            </SvgIcon>
            <Typography
                className={
                    hover ? classes.page_name_hover : classes.page_name_normal
                }
            >
                Sign Out
            </Typography>
        </Box>
    )
}