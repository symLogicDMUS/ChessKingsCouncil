import React, {useState} from "react";
import clsx from "clsx";
import SignInWindow from "./SignInWindow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {IconButton, Portal, SvgIcon, Typography} from "@material-ui/core";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import ToolButtonAlt from "../Reuseables/Clickables/ToolButtonAlt";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Option from "../CreatePiece/Options/Option";
import {icons} from "../styles/icons/top/icons.jss";
import {themes} from "../styles/themes/themes.jss";
import {useStyles as useEvenMoreStyles} from
        "./FirebaseGuestLoginButton.jss"
import {useStyles as useEvenMoreMoreStyles} from
        "../GameRoot/SaveResignTool/SaveResignTool.jss";
import { useStyles as useMoreStyles } from "./AskLoginButton.jss";

function AskLoginButton({theme, buttonType, iconName, text, className}) {
    const [loginModal, setAskLoginModal] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const classes2 = useMoreStyles({theme});
    const classes3 = useEvenMoreStyles();
    const classes4 = useEvenMoreMoreStyles({theme: theme});

    return (
        <>
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
                        className={className}
                        onBackdropClick={() => setAskLoginModal(false)}
                    >
                        <DialogTitle className={classes2.title}>Do you want to sign in?</DialogTitle>
                        <DialogContent className={classes2.text}>
                            You can save work without signing in but it will only be available until you leave the site.
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
                            <FirebaseGuestLoginButton />
                            <Button className={classes2.cancel_button} variant='outlined' onClick={() => setAskLoginModal(false)}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Portal>
            ) : null}
            {buttonType === 'option' && (
                <Option
                    name={text}
                    theme={theme}
                    iconType={iconName}
                    className={className}
                    onClick={() => setAskLoginModal(true)}
                />
            )}
            {buttonType === 'option_alt' && (
                <IconButton
                    className={classes4.option}
                    classes={{ label: classes4.label }}
                    onClick={() => setAskLoginModal(true)}
                >
                    <SvgIcon>
                        {icons.save_as(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography noWrap className={classes4.text}>
                        {text}
                    </Typography>
                </IconButton>
            )}
            {buttonType !== 'option' && buttonType !== 'option_alt' && (
                <ToolButtonAlt
                    text={text}
                    theme={theme}
                    isActive={loginModal}
                    iconName={iconName}
                    className={className}
                    onClick={() => setAskLoginModal(true)}
                />
            )}
        </>
    );
}


export default AskLoginButton;