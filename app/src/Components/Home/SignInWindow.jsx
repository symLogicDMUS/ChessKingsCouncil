import React from "react";
import clsx from "clsx";
import * as firebase from "firebase";
import "firebase/auth";
import {uiConfig} from "./uiconfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {BoardPatternRow} from "../Reuseables/Background/BoardPatternRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import '../Reuseables/Background/_backgrounds.scss';
import {KeyboardBackspace} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {Portal} from "@material-ui/core";
import {useStyles} from "./SignInWindow.jss";

function SignInWindow(props) {
    const sm = useMediaQuery("(max-width:960px)");
    const classes = useStyles({theme: 'tan'});

    return (
        <Portal>
            <div className={classes.login_page}>
                <img
                    onClick={props.close}
                    className={classes.top_button}
                    src={'/Images/Backgrounds/board-pattern-tan-close.svg'}
                />
                <BoardPatternRow row2={false} theme='tan' />
                <div className={classes.content}>
                    <img
                        src={`/Images/titles/desktop/title-tan.svg`}
                        className={clsx(classes.appTitle, {
                            [classes.appTitleSm]: sm,
                            [classes.appTitleMd]: ! sm
                        })}
                    />
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <Button onClick={props.close} className={classes.close} variant='text' startIcon={<KeyboardBackspace />}>
                        Go Back
                    </Button>
                </div>
                <BoardPatternRow row2={true} theme='tan' />
            </div>
        </Portal>
    );
}


export default SignInWindow;
