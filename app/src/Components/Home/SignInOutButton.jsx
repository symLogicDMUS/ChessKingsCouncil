import React, {useContext, useEffect, useState} from "react";
import * as firebase from "firebase";
import "firebase/auth";
import SignInWindow from "./SignInWindow";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import IconButton from "@material-ui/core/IconButton";
import MediaQuery from "react-responsive/src";
import {MenuItem} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import { useStyles } from "./SignInOutButton.jss";
import Button from "@material-ui/core/Button";
import {UserContext} from "../../UserContext";
import clsx from "clsx";

function SignInOutButton({theme, className}) {
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

    const classes = useStyles({theme: theme});

    return (
        <>
            {signInWindow ? (
                <SignInWindow theme={theme} close={() => setSignInWindow(false)}  />
            ) : null}
            <MediaQuery maxWidth={420}>
                <IconButton
                    onClick={handleMenu}
                    className={clsx(classes.text, {[className]:className})}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                >
                    <AccountBoxIcon className={classes.text} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={menuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem
                        onClick={() => {
                            handleMenuClose();
                            firebase.auth().signOut()
                        }}
                        className={clsx(classes.text, {[className]:className})}
                    >
                        Sign Out
                    </MenuItem>
                </Menu>
            </MediaQuery>
            <MediaQuery minWidth={420}>
                {isSignedIn ? (
                    <Button
                        onClick={() => firebase.auth().signOut()}
                        className={clsx(classes.button, {[className]:className})}
                        startIcon={<AccountBoxIcon />}
                    >
                        Sign Out
                    </Button>
                ) : (
                    <Button
                        onClick={() => setSignInWindow(true)}
                        className={clsx(classes.button, {[className]:className})}
                        startIcon={<AccountBoxIcon />}
                    >
                        Sign In
                    </Button>
                )}
            </MediaQuery>
        </>
    );
}

export default SignInOutButton;