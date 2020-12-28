import React from "react";
import * as PropTypes from "prop-types";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export function LoginPage(props) {
    return <>
        <img
            src="/Images/chess-kings-council.svg"
            style={{position: "relative", top: "22vh", left: "12.5vw", height: "20vh", width: "75vw"}}
        />
        <div
            className="config-container"
            style={{position: "relative", width: "20vw", height: "15vh", left: "36vw", top: "22vh"}}
        >
            <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()}/>
            <div
                className="anonymous-login"
                onClick={props.anonymousLogin}
                style={{
                    position: "relative",
                    width: "60%",
                    height: "20%",
                    left: "20%",
                    textAlign: "center",
                    fontSize: "110%",
                    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                    cursor: "pointer",
                }}
            >
                Explore without Account
            </div>
        </div>
    </>;
}

LoginPage.propTypes = {
    uiConfig: PropTypes.any,
    anonymousLogin: PropTypes.func
};