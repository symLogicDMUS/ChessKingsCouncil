import React, {useState} from "react";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import {fontSize} from "../styles/fontSize.jss";
import {useStyles} from "./LoginPage.jss";
import MediaQuery from "react-responsive/src";
import {Background} from "../Reuseables/Background";

export function LoginPage(props) {
    let [theme, setTheme] = useState("tan");
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <>
            <MediaQuery minDeviceWidth={768}>
                <Background theme={theme} />
                <div className={classes.login_page}>
                    <img src={`/Images/titles/desktop/title-${theme}.svg`} className={classes.app_title_desktop}/>
                    <StyledFirebaseAuth
                        uiConfig={props.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <FirebaseGuestLoginButton onClick={props.anonymousLogin}/>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <div className={classes.login_page}>
                    <img src={`/Images/titles/mobile/login/title-${theme}.svg`} className={classes.app_title_mobile}/>
                    <StyledFirebaseAuth
                        uiConfig={props.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <FirebaseGuestLoginButton onClick={props.anonymousLogin}/>
                </div>
            </MediaQuery>
        </>
    );
}