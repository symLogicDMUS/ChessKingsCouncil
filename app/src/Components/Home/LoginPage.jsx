import React, {useState} from "react";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import {fontSize} from "../styles/fontSize.jss";
import {useStyles} from "./LoginPage.jss";

export function LoginPage(props) {
    let [theme, setTheme] = useState('black');
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <div className={classes.login_page}>
            <img src="/Images/chess-kings-council.svg" className={classes.app_title}/>
            <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()}/>
            <FirebaseGuestLoginButton onClick={props.anonymousLogin} />
        </div>
    )
}