import React, {useEffect, useState} from "react";
import MediaQuery from "react-responsive/src";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import {fontSize002} from "../styles/fontSizes.jss";
import {Background} from "../Reuseables/Background/Background";
import '../Reuseables/Background/_backgrounds.scss';
import {useStyles} from "./SignInPage.jss";

export function SignInPage(props) {
    let [theme, setTheme] = useState("tan");
    const classes = useStyles({theme: theme, fontSize: fontSize002});

    useEffect(() => {
        document.body.className = `${theme}-background`
    }, [theme])

    return (
        <>
            <MediaQuery minWidth={960}>
                <Background theme={theme}/>
                <div className={classes.login_page}>
                    <img src={`/Images/titles/desktop/title-${theme}.svg`} className={classes.appTitleMd}/>
                    <div className={classes.login_in_buttons}>
                        <StyledFirebaseAuth
                            uiConfig={props.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                    <FirebaseGuestLoginButton onClick={props.anonymousLogin}/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <Background theme={theme}/>
                <div className={classes.login_page}>
                    <img
                        src={`/Images/titles/desktop/title-${theme}.svg`}
                        className={classes.appTitleSm}
                    />
                    <div className={classes.login_in_buttons}>
                        <StyledFirebaseAuth
                            uiConfig={props.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                    <FirebaseGuestLoginButton onClick={props.anonymousLogin}/>
                </div>
            </MediaQuery>
        </>
    );
}