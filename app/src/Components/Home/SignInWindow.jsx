import React from "react";
import clsx from "clsx";
import * as firebase from "firebase";
import "firebase/auth";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import {Background} from "../Reuseables/Background/Background";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "./SignInWindow.jss";
import Button from "@material-ui/core/Button";
import {RemoveCircle} from "@material-ui/icons";

function SignInWindow(props) {
    const classes = useStyles({theme: props.theme});
    const sm = useMediaQuery("(max-width:960px)");

    return (
        <>
            <Background theme={props.theme}/>
            <div className={classes.login_page}>
                <Button onClick={props.close} className={classes.close} startIcon={<RemoveCircle />}>
                    Close
                </Button>
                <img
                    src={`/Images/titles/desktop/title-${props.theme}.svg`}
                    className={clsx(classes.appTitle, {
                         [classes.appTitleSm]: sm,
                         [classes.appTitleMd]: ! sm
                     })}
                />
                <FirebaseGuestLoginButton onClick={props.anonymousLogin} />
            </div>
        </>
    );
}

export default SignInWindow;
