import React, {useState} from "react";
import clsx from "clsx";
import {ClickAwayListener, Portal, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SignInWindow from "./SignInWindow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Option from "../CreatePiece/Options/Option";
import DialogTitle from "@material-ui/core/DialogTitle";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import ToolButtonAlt from "../Reuseables/Clickables/ToolButtonAlt";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {useStyles as useMoreStyles} from "./FirebaseGuestLoginButton.jss"
import { useStyles } from "./AskLoginButton.jss";

function AskLoginButton({theme, buttonType, className}) {
    const [modal, setModal] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const classes = useStyles({theme});
    const classes2 = useMoreStyles();

    return (
        <>
            {signIn ? (
                <SignInWindow
                    close={() => {
                        setModal(true)
                        setSignIn(false)
                    }}
                />
            ) : null}
            {modal ? (
                <Portal>
                    <Dialog
                        open={true}
                        classes={{
                            container: classes.container,
                            paper: classes.dialog_window
                        }}
                        onBackdropClick={() => setModal(false)}
                    >
                        <DialogTitle className={classes.title}>Do you want to sign in?</DialogTitle>
                        <DialogContent className={classes.text}>
                            You can continue without signing in but it will only be available until you leave the site.
                        </DialogContent>
                        <DialogActions className={classes.dialog_actions}>
                            <Button
                                onClick={() => {
                                    setSignIn(true)
                                    setModal(false)
                                }}
                                className={clsx(classes2.button, {[classes2.color2]:true})}
                            >
                                <Typography className={classes2.text}>
                                    Sign In
                                </Typography>
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"}
                                    alt="google social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"} al
                                    alt="facebook social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"}
                                    alt="github social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg"} a
                                    alt="twitter social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"}
                                    alt="e-mail social media icon"
                                    className={classes.icon}
                                />
                            </Button>
                            <FirebaseGuestLoginButton />
                            <Button className={classes.cancel_button} variant='outlined' onClick={() => setModal(false)}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Portal>
            ) : null}
            {buttonType === 'option' ? (
                <Option
                    theme={theme}
                    iconType="save"
                    key='save-option'
                    className={className}
                    onClick={() => setModal(true)}
                />
            ) : (
                <ToolButtonAlt
                    text="Save"
                    theme={theme}
                    isActive={modal}
                    iconName={"save_alt"}
                    onClick={() => setModal(true)}
                />
            )}
        </>
    );
}

/*

* */
export default AskLoginButton;