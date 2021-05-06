import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./FirebaseGuestLoginButton.jss";

export function FirebaseGuestLoginButton() {

    const anonymousLogin = () => {
        firebase
            .auth()
            .signInAnonymously()
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`error: ${errorMessage} code: ${errorCode}`)
            })
    }

    const classes = useStyles();

    return <Box onClick={anonymousLogin} className={classes.anonymous_login_button}>
        <Typography className={classes.anonymous_login_label} noWrap>
            Explore without account
        </Typography>
    </Box>;
}