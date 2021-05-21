import React, {useContext, useState} from "react";
import clsx from "clsx";
import Dialog from "@material-ui/core/Dialog";
import { MuiButton } from "./MuiButton";
import {Button} from "@material-ui/core";
import {Portal,Typography} from "@material-ui/core";
import SignInWindow from "../../Home/SignInWindow";
import { StandardModal } from "../Modals/StandardModal";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {FirebaseGuestLoginButton} from "../../Home/FirebaseGuestLoginButton";
import {useStyles as useMoreStyles} from "../../Home/AskLoginButton.jss";
import {useStyles as useEvenMoreStyles} from "../../Home/FirebaseGuestLoginButton.jss";
import {UserContext} from "../../../UserContext";
import { useStyles } from "../Modals/StandardModal.jss";


export function MuiDeleteButton(props) {
    const uid = useContext(UserContext);
    const [modal, setModal] = useState(false);
    const [loginModal, setAskLoginModal] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({theme: props.theme});
    const classes3 = useEvenMoreStyles();

    const onClick = () => {
        if (! uid) {
            setAskLoginModal(true)
        }
        else {
            setModal(true)
        }
    };
    return (
        <>
            {modal ? (
                <Portal>
                    <StandardModal
                        title={props.modalTitle}
                        text={props.modalText}
                        theme={props.theme}
                        closeClick={() => setModal(false)}
                    >
                        <Button
                            onClick={() => {
                                props.onAcceptDelete();
                                setModal(false);
                            }}
                            variant={"text"}
                            size={props.size}
                            theme={props.theme}
                            className={clsx(classes.button, {
                                [classes.yes_button]:true
                            })}
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={() => setModal(false)}
                            variant={"text"}
                            theme={props.theme}
                            size={props.size}
                            className={clsx(classes.button, {
                                [classes.no_button]:true
                            })}
                        >
                            No
                        </Button>
                    </StandardModal>
                </Portal>
            ) : null}
            {signIn ? (
                <SignInWindow
                    close={() => {
                        setAskLoginModal(false)
                        setSignIn(false)
                    }}
                    goBack={() => {
                        setAskLoginModal(true)
                        setSignIn(false)
                    }}
                />
            ) : null}
            {loginModal ? (
                <Portal>
                    <Dialog
                        open={true}
                        classes={{
                            container: classes2.container,
                            paper: classes2.dialog_window
                        }}
                        onBackdropClick={() => setAskLoginModal(false)}
                    >
                        <DialogTitle className={classes2.title}>Do you want to sign in?</DialogTitle>
                        <DialogContent className={classes2.text}>
                            You need to sign in in order to delete images pieces or games.
                        </DialogContent>
                        <DialogActions className={classes2.dialog_actions}>
                            <Button
                                onClick={() => {
                                    setSignIn(true)
                                    setAskLoginModal(false)
                                }}
                                className={clsx(classes3.button, {[classes3.color2]:true})}
                            >
                                <Typography className={classes3.text}>
                                    Sign In
                                </Typography>
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"}
                                    alt="google social media icon"
                                    className={classes2.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"} al
                                    alt="facebook social media icon"
                                    className={classes2.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"}
                                    alt="github social media icon"
                                    className={classes2.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg"} a
                                    alt="twitter social media icon"
                                    className={classes2.icon}
                                />
                                <img
                                    src={"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"}
                                    alt="e-mail social media icon"
                                    className={classes2.icon}
                                />
                            </Button>
                            <FirebaseGuestLoginButton callback={() => setAskLoginModal(false)} />
                            <Button className={classes2.cancel_button} variant='outlined' onClick={() => setAskLoginModal(false)}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Portal>
            ) : null}
            <MuiButton
                onClick={onClick}
                isDisabled={props.isDisabled}
                startIcon={props.startIcon}
                classesObj={props.classesObj}
                className={props.className}
                variant={props.variant}
                style={props.style}
                theme={props.theme}
                size={props.size}
            >
                {props.altText ? props.altText : "Delete"}
            </MuiButton>
        </>
    );
}
