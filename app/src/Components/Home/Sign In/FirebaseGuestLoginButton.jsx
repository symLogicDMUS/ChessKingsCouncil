import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./FirebaseGuestLoginButton.jss";
import clsx from "clsx";

export function FirebaseGuestLoginButton({callback}) {
    const anonymousLogin = () => {
        firebase
            .auth()
            .signInAnonymously()
            .then(r => {
                if (!!callback) {
                    callback()
                }
            }).catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`error: ${errorMessage} code: ${errorCode}`);
            });
    };

    const classes = useStyles();

    return (
        <Button
            onClick={anonymousLogin}
            className={clsx(classes.button, { [classes.color1]: true })}
            variant="outlined"
        >
            <Typography className={classes.text} noWrap>
                Continue without sign in
            </Typography>
        </Button>
    );
}
