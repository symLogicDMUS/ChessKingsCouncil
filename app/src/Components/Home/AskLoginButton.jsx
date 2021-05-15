import React, {useState} from "react";
import clsx from "clsx";
import SignInWindow from "./SignInWindow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {IconButton, Portal, SvgIcon, Typography} from "@material-ui/core";
import {FirebaseGuestLoginButton} from "./FirebaseGuestLoginButton";
import ToolButton from "../Reuseables/Clickables/ToolButtonAlt";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Option from "../CreatePiece/Options/Option";
import {icons} from "../styles/icons/top/icons.jss";
import {themes} from "../styles/themes/themes.jss";
import {useStyles as useMoreStyles} from
        "./FirebaseGuestLoginButton.jss"
import {useStyles as useEvenMoreStyles} from
        "../GameRoot/SaveResignTool/SaveResignTool.jss";
import { useStyles } from "./AskLoginButton.jss";

function AskLoginButton({theme, buttonType, iconName, text, className}) {
    const [modal, setModal] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const classes = useStyles({theme});
    const classes2 = useMoreStyles();
    const classes3 = useEvenMoreStyles({theme: theme});

    return (
        <>
            {signIn ? (
                <SignInWindow
                    close={() => {
                        setModal(false)
                        setSignIn(false)
                    }}
                    goBack={() => {
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
                        className={className}
                        onBackdropClick={() => setModal(false)}
                    >
                        <DialogTitle className={classes.title}>Do you want to sign in?</DialogTitle>
                        <DialogContent className={classes.text}>
                            You can save work without signing in but it will only be available until you leave the site.
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
            {buttonType === 'option' && (
                <Option
                    name={text}
                    theme={theme}
                    iconType={iconName}
                    className={className}
                    onClick={() => setModal(true)}
                />
            )}
            {buttonType === 'option_alt' && (
                <IconButton
                    className={classes3.option}
                    classes={{ label: classes3.label }}
                    onClick={() => setModal(true)}
                >
                    <SvgIcon>
                        {icons.save_as(themes[theme].button_text)}
                    </SvgIcon>
                    <Typography noWrap className={classes3.text}>
                        {text}
                    </Typography>
                </IconButton>
            )}
            {buttonType === "theme" && (
                <Button
                    onClick={() => setModal(true)}
                    className={classes.save_theme_button}
                    variant={'contained'}
                >
                    Save For next visit
                </Button>
            )}
            {
                buttonType !== 'option'
                && buttonType !== 'option_alt'
                && buttonType !== "theme" && (
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