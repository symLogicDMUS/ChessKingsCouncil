import React, { useContext, useState } from "react";
import * as firebase from "firebase";
import "firebase/auth";
import clsx from "clsx";
import Tab from "@material-ui/core/Tab";
import SignInWindow from "./SignInWindow";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { UserContext } from "../../../Context/UserContext";
import { useStyles } from "./SignInOutButton.jss";

function SignInOutTab({ theme, className }) {
    const uid = useContext(UserContext);
    const isSignedIn = Boolean(uid);
    const [signInWindow, setSignInWindow] = useState(false);

    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.root}>
            {signInWindow ? (
                <SignInWindow
                    theme={theme}
                    close={() => setSignInWindow(false)}
                    goBack={() => setSignInWindow(false)}
                />
            ) : null}
            {isSignedIn ? (
                <Tab
                    onClick={() => firebase.auth().signOut()}
                    className={clsx(classes.button, {
                        [className]: className,
                    })}
                    icon={<AccountBoxIcon />}
                    label="Sign Out"
                />
            ) : (
                <Tab
                    onClick={() => setSignInWindow(true)}
                    className={clsx(classes.button, {
                        [className]: className,
                    })}
                    startIcon={<AccountBoxIcon />}
                    label="Sign In"
                />
            )}
        </div>
    );
}

export default SignInOutTab;
