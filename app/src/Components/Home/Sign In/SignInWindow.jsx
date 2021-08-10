import * as firebase from "firebase";
import "firebase/auth";
import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { uiConfig } from "../uiconfig";
import { Portal, Typography } from "@material-ui/core";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BoardPatternRow } from "../../styles/Background/BoardPatternRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { KeyboardBackspace } from "@material-ui/icons";
import "../../styles/Background/_backgrounds.scss";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SignInWindow.jss";
import { HelpModal } from "../../Reuseables/NavBar/Help/HelpModal";

function SignInWindow({ goBack }) {
    const [helpReminder, setHelpReminder] = useState(false);
    const [helpModal, setHelpModal] = useState(false);
    const classes = useStyles({ theme: "tan" });
    const sm = useMediaQuery("(max-width:960px)");
    const screenCase = sm ? "thin" : "wide";

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setHelpReminder(true);
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
                    {helpReminder ? (
                        <Typography
                            className={classes.help_reminder}
                            variant="h5"
                            paragraph
                        >
                            If you ever need help, see the help button in the
                            nav bar bar or side drawer.
                            <Button
                                onClick={() => setHelpModal(true)}
                                startIcon={<ContactSupportIcon />}
                                size={"large"}
                            >
                                Help
                            </Button>
                        </Typography>
                    ) : (
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
                    {helpModal && (
                        <HelpModal
                            theme="tan"
                            screenCase={screenCase}
                            onClose={() => setHelpModal(false)}
                        />
                    )}
                    <Button
                        variant="text"
                        onClick={goBack}
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
