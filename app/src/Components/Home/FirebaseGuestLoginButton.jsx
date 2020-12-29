import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fontSize} from "../styles/fontSize.jss";
import { useStyles } from "./FirebaseGuestLoginButton.jss";

export function FirebaseGuestLoginButton(props) {
    const classes = useStyles({fontSize: fontSize});
    return <Box onClick={props.onClick} className={classes.anonymous_login_button}>
        <img src='/Images/person-outline/person-outline.svg' className={classes.anonymous_icon}/>
        <Typography className={classes.anonymous_login_label} noWrap>Continue as guest</Typography>
    </Box>;
}