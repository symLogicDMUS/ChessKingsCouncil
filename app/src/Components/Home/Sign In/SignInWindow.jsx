import "firebase/auth";
import * as firebase from "firebase";
import { uiConfig } from "../uiconfig";
import Button from "@material-ui/core/Button";
import { Portal, Typography } from "@material-ui/core";
import {ReactComponent as Title} from "./Chess Kings Council.svg";
import { HelpModal } from "../../Reuseables/NavBar/Help/HelpModal";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { KeyboardBackspace } from "@material-ui/icons";
import "../../styles/Background/_backgrounds.scss";
import React, {useState, useEffect} from "react";
import { useStyles } from "./SignInWindow.jss";
import Box from "@material-ui/core/Box";

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
            <img src={"/Images/wood background.jpg"} className={classes.background} alt="" />
            <div className={classes.login_page}>
                <div className={classes.content}>
                    <Title className={classes.title} fill="#253b73" />
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
                        <Box className={classes.buttons}>
                            <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            <Button
                                variant="text"
                                onClick={goBack}
                                className={classes.close}
                                startIcon={<KeyboardBackspace />}
                            >
                                Go Back
                            </Button>
                        </Box>
                    )}
                    {helpModal && (
                        <HelpModal
                            theme="blue"
                            screenCase={screenCase}
                            onClose={() => setHelpModal(false)}
                        />
                    )}

                </div>
            </div>
        </Portal>
    );
}

export default SignInWindow;
