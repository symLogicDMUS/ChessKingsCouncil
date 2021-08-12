import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MuiButton } from "./MuiButton";
import { Portal } from "@material-ui/core";
import { AskSignInToDelete } from "./AskSignInToDelete";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import SignInWindow from "../../Home/Sign In/SignInWindow";
import { useStyles as useMoreStyles } from "../../Home/Sign In/AskLoginButton.jss";
import { useStyles as useEvenMoreStyles } from "../../Home/Sign In/FirebaseGuestLoginButton.jss";
import { UserContext } from "../../../Context/UserContext";
import { useStyles } from "../Modals/StandardModal.jss";

export function MuiDeleteButton(props) {
    const {
        onAcceptDelete,
        modalTitle,
        modalText,
        size,
        className,
        theme,
        ...other
    } = props;

    const uid = useContext(UserContext);

    const [modal, setModal] = useState(false);
    const [loginModal, setAskLoginModal] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const classes3 = useEvenMoreStyles();

    const onClick = () => {
        if (!uid) {
            setAskLoginModal(true);
        } else {
            setModal(true);
        }
    };

    return (
        <>
            {modal ? (
                <Portal>
                    <ConfirmDeleteModal
                        title={modalTitle}
                        classes={classes}
                        text={modalText}
                        theme={theme}
                        size={size}
                        closeClick={() => setModal(false)}
                        onClick={() => {
                            onAcceptDelete();
                            setModal(false);
                        }}
                    />
                </Portal>
            ) : null}
            {signIn ? (
                <SignInWindow
                    close={() => {
                        setAskLoginModal(false);
                        setSignIn(false);
                    }}
                    goBack={() => {
                        setAskLoginModal(true);
                        setSignIn(false);
                    }}
                />
            ) : null}
            {loginModal ? (
                <Portal>
                    <AskSignInToDelete
                        classes2={classes2}
                        classes3={classes3}
                        onClick={() => {
                            setSignIn(true);
                            setAskLoginModal(false);
                        }}
                        onBackdropClick={() => setAskLoginModal(false)}
                    />
                </Portal>
            ) : null}
            <MuiButton
                onClick={onClick}
                className={className}
                theme={theme}
                {...other}
            >
                Delete
            </MuiButton>
        </>
    );
}
