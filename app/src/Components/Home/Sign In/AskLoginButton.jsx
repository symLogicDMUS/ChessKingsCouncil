import React, { useState } from "react";
import clsx from "clsx";
import SignInWindow from "./SignInWindow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Option from "../../Reuseables/Clickables/Option";
import { Portal, Typography } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { FirebaseGuestLoginButton } from "./FirebaseGuestLoginButton";
import ToolButton from "../../Reuseables/MiniVariantTool/ToolButton";
import { useStyles as useMoreStyles } from "./FirebaseGuestLoginButton.jss";
import { useStyles } from "./AskLoginButton.jss";

function AskLoginButton({
    theme,
    buttonType,
    iconName,
    text,
    className,
    isGameOption,
}) {
    const [modal, setModal] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const classes = useStyles({ theme });
    const classes2 = useMoreStyles();
    return (
        <>
            {signIn ? (
                <SignInWindow
                    close={() => {
                        setModal(false);
                        setSignIn(false);
                    }}
                    goBack={() => {
                        setModal(true);
                        setSignIn(false);
                    }}
                />
            ) : null}
            {modal ? (
                <Portal>
                    <Dialog
                        open={true}
                        classes={{
                            container: classes.container,
                            paper: classes.dialog_window,
                        }}
                        className={className}
                        onBackdropClick={() => setModal(false)}
                    >
                        <DialogTitle className={classes.title}>
                            Do you want to sign in?
                        </DialogTitle>
                        <DialogContent className={classes.text}>
                            You can save work without signing in but it will
                            only be available until you leave the site.
                        </DialogContent>
                        <DialogActions className={classes.dialog_actions}>
                            <Button
                                onClick={() => {
                                    setSignIn(true);
                                    setModal(false);
                                }}
                                className={clsx(classes2.button, {
                                    [classes2.color2]: true,
                                })}
                            >
                                <Typography className={classes2.text}>
                                    Sign In
                                </Typography>
                                <img
                                    src={
                                        "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                    }
                                    alt="google social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={
                                        "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
                                    }
                                    al
                                    alt="facebook social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={
                                        "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"
                                    }
                                    alt="github social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={
                                        "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg"
                                    }
                                    a
                                    alt="twitter social media icon"
                                    className={classes.icon}
                                />
                                <img
                                    src={
                                        "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
                                    }
                                    alt="e-mail social media icon"
                                    className={classes.icon}
                                />
                            </Button>
                            <FirebaseGuestLoginButton />
                            <Button
                                className={classes.cancel_button}
                                variant="outlined"
                                onClick={() => setModal(false)}
                            >
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Portal>
            ) : null}
            {buttonType === "option" && (
                <Option
                    name={text}
                    theme={theme}
                    iconType={iconName}
                    className={className}
                    isGameOption={isGameOption}
                    onClick={() => setModal(true)}
                />
            )}
            {buttonType === "theme" && (
                <Button
                    onClick={() => setModal(true)}
                    className={classes.save_theme_button}
                    variant={"contained"}
                >
                    Save For next visit
                </Button>
            )}
            {buttonType !== "option" && buttonType !== "theme" && (
                <ToolButton
                    text={text}
                    theme={theme}
                    isActive={modal}
                    iconName={iconName}
                    className={className}
                    onClick={() => setModal(true)}
                />
            )}
        </>
    );
}

export default AskLoginButton;
