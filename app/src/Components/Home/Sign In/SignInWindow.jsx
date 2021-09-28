import React, {
    useState,
    useEffect
} from "react";
import clsx from "clsx";
import "firebase/auth";
import * as firebase from "firebase";
import {uiConfig} from "../uiconfig";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Portal, Typography} from "@material-ui/core";
import {ReactComponent as Title} from "./Chess Kings Council.svg";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {KeyboardBackspace} from "@material-ui/icons";
import "../../styles/Background/_backgrounds.scss";
import {useStyles} from "./SignInWindow.jss";

function SignInWindow({goBack}) {
    const [helpReminder, setHelpReminder] = useState(false);

    const classes = useStyles({theme: "tan"});

    const sm = useMediaQuery("(max-width:960px)");

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setHelpReminder(true);
            }
        });
    }, []);

    const backButton =
        <Button
            variant="text"
            onClick={goBack}
            className={classes.close}
            startIcon={<KeyboardBackspace/>}
        >
            Go Back
        </Button>

    return (
        <Portal>
            <div className={classes.background} />
            <div className={classes.login_page}>
                <div className={classes.content}>
                    <Title className={classes.title} fill="#fff"/>
                    {helpReminder ? (
                        <Box className={classes.buttons}>
                            <Typography
                                className={classes.help_reminder}
                                variant="h5"
                                paragraph
                            >
                                If you ever need help, see the help button in the nav bar bar or side drawer.
                            </Typography>
                            {backButton}
                        </Box>
                        ) : (
                            <Box className={classes.buttons}>
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                                {backButton}
                            </Box>
                        )}
                </div>
            </div>
        </Portal>
    );
}

export default SignInWindow;