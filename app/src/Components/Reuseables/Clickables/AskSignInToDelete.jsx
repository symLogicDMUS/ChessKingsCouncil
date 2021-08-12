import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import { FirebaseGuestLoginButton } from "../../Home/Sign In/FirebaseGuestLoginButton";
import React from "react";
import * as PropTypes from "prop-types";

/**extension of MuiDeleteButton*/
export function AskSignInToDelete(props) {
    const { onClick, onBackdropClick, classes2, classes3 } = props;

    return (
        <Dialog
            open={true}
            classes={{
                container: classes2.container,
                paper: classes2.dialog_window,
            }}
            onBackdropClick={onBackdropClick}
        >
            <DialogTitle className={classes2.title}>
                Do you want to sign in?
            </DialogTitle>
            <DialogContent className={classes2.text}>
                You need to sign in in order to delete images pieces or games.
            </DialogContent>
            <DialogActions className={classes2.dialog_actions}>
                <Button
                    onClick={onClick}
                    className={clsx(classes3.button, {
                        [classes3.color2]: true,
                    })}
                >
                    <Typography className={classes3.text}>Sign In</Typography>
                    <img
                        src={
                            "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        }
                        alt="google social media icon"
                        className={classes2.icon}
                    />
                    <img
                        src={
                            "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
                        }
                        alt="facebook social media icon"
                        className={classes2.icon}
                    />
                    <img
                        src={
                            "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"
                        }
                        alt="github social media icon"
                        className={classes2.icon}
                    />
                    <img
                        src={
                            "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg"
                        }
                        alt="twitter social media icon"
                        className={classes2.icon}
                    />
                    <img
                        src={
                            "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
                        }
                        alt="e-mail social media icon"
                        className={classes2.icon}
                    />
                </Button>
                <FirebaseGuestLoginButton callback={onBackdropClick} />
                <Button
                    variant="outlined"
                    className={classes2.cancel_button}
                    onClick={onBackdropClick}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

AskSignInToDelete.propTypes = {
    classes2: PropTypes.any,
    onBackdropClick: PropTypes.func,
    onClick: PropTypes.func,
    classes3: PropTypes.any,
};
