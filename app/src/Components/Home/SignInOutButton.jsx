import React, { useContext, useState } from "react";
import * as firebase from "firebase";
import "firebase/auth";
import clsx from "clsx";
import SignInWindow from "./SignInWindow";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import IconButton from "@material-ui/core/IconButton";
import MediaQuery from "react-responsive/src";
import {MenuItem, Typography} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import {MuiMenu} from "../Reuseables/UserInput/MuiMenu";
import Button from "@material-ui/core/Button";
import { UserContext } from "../../UserContext";
import { useStyles } from "./SignInOutButton.jss";

function SignInOutButton({ theme, className, style, variant}) {
    const uid = useContext(UserContext);
    const isSignedIn = Boolean(uid);
    const [signInWindow, setSignInWindow] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles({ theme: theme });

    return (
        <>
            {signInWindow ? (
                <SignInWindow
                    theme={theme}
                    close={() => setSignInWindow(false)}
                    goBack={() => setSignInWindow(false)}
                />
            ) : null}
            <MediaQuery maxWidth={480}>
                <IconButton
                    onClick={handleMenu}
                    className={clsx(classes.button, {
                        [className]: className,
                    })}
                    style={style}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                >
                    <AccountBoxIcon />
                </IconButton>
                <MuiMenu
                    id="menu-appbar"
                    open={menuOpen}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    theme={theme}
                >
                    <MenuItem
                        onClick={() => {
                            handleMenuClose();
                            firebase.auth().signOut();
                        }}
                        className={clsx(classes.button, {
                            [className]: className,
                        })}
                        style={style}
                    >
                        <Typography noWrap>Sign Out</Typography>
                    </MenuItem>
                </MuiMenu>
            </MediaQuery>
            <MediaQuery minWidth={480}>
                {isSignedIn ? (
                    <Button
                        onClick={() => firebase.auth().signOut()}
                        className={clsx(classes.button, {
                            [className]: className,
                        })}
                        startIcon={<AccountBoxIcon />}
                        variant={variant}
                        style={style}
                    >
                        <Typography noWrap>Sign Out</Typography>
                    </Button>
                ) : (
                    <Button
                        onClick={() => setSignInWindow(true)}
                        className={clsx(classes.button, {
                            [className]: className,
                        })}
                        startIcon={<AccountBoxIcon />}
                        variant={variant}
                        style={style}
                    >
                        <Typography noWrap>Sign In</Typography>
                    </Button>
                )}
            </MediaQuery>
        </>
    );
}

export default SignInOutButton;
