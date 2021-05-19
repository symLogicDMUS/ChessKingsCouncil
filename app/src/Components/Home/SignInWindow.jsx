import React, { useEffect } from "react";
import clsx from "clsx";
import * as firebase from "firebase";
import "firebase/auth";
import { uiConfig } from "./uiconfig";
import { Portal } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BoardPatternRow } from "../styles/Background/BoardPatternRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { KeyboardBackspace } from "@material-ui/icons";
import "../styles/Background/_backgrounds.scss";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SignInWindow.jss";

function SignInWindow(props) {
    const {close, goBack} = props;

    const classes = useStyles({ theme: "tan" });
    const sm = useMediaQuery("(max-width:960px)");

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                close();
            }
        });
    }, []);

    return (
        <Portal>
            <div className={classes.login_page}>
                <BoardPatternRow row2={false} theme="tan" />
                <div className={classes.content}>
                    <img
                        src={`/Images/text/app title/title-tan.svg`}
                        className={clsx(classes.appTitle, {
                            [classes.appTitleSm]: sm,
                            [classes.appTitleMd]: !sm,
                        })}
                    />
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <Button
                        onClick={goBack}
                        variant="text"
                        className={classes.close}
                        startIcon={<KeyboardBackspace />}
                    >
                        Go Back
                    </Button>
                </div>
                <BoardPatternRow row2={true} theme="tan" />
            </div>
        </Portal>
    );
}

export default SignInWindow;
