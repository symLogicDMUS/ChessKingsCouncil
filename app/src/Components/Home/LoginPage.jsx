import React, {useEffect, useState} from "react";
import MediaQuery from "react-responsive/src";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import {fontSize002} from "../styles/fontSizes.jss";
import {Background} from "../Reuseables/Background";
import '../styles/_backgrounds.scss';
import {useStyles} from "./LoginPage.jss";
import Box from "@material-ui/core/Box";

export function LoginPage(props) {
    let [theme, setTheme] = useState("tan");
    const classes = useStyles({theme: theme, fontSize: fontSize002});

    useEffect(() => {
        document.body.className = `${theme}-background`
    }, [theme])

    return (
        <>
            <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
                <Background theme={theme}/>
                <div className={classes.login_page}>
                    <img src={`/Images/titles/desktop/title-${theme}.svg`} className={classes.app_title_desktop}/>
                    <StyledFirebaseAuth
                        uiConfig={props.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <FirebaseGuestLoginButton onClick={props.anonymousLogin}/>
                </div>
            </MediaQuery>
            <MediaQuery maxAspectRatio={'1/1'}>
                <Background theme={theme}/>
                <div className={classes.login_page}>
                    <MediaQuery maxAspectRatio={'834/1194'}>
                        <img src={`/Images/titles/mobile/login/title-${theme}.svg`}
                             className={classes.app_title_mobile}/>
                    </MediaQuery>
                    <MediaQuery minAspectRatio={'834/1194'}>
                        <img src={`/Images/titles/desktop/title-${theme}.svg`} className={classes.app_title_mobile}/>
                    </MediaQuery>
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