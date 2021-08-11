import clsx from "clsx";
import React, {useState} from "react";
import { invalids } from "../helpers/invalids";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import { useStyles } from "./Play.jss";

function Play(props) {
    const {
        finish,
        playerType,
        gameType,
        gameName,
        predicate,
        theme,
        ...other
    } = props;
    const [showMessage, setShowMessage] = useState(false);
    const classes = useStyles({ theme: props.theme });

    const getMessage = () => {
        const message = ["you need to choose a "];
        if (! playerType) message.push("player type");
        if (! gameType) message.push("game type");
        if (! gameName) message.push("game name");

        if (message.length === 1) {
            return null;
        }

        if (message.length===2) {
            return message[0] + message[1] + ".";
        }

        if (message.length===3) {
            return message[0] + message[1] + " and a " + message[2] + ".";
        }

        return message[0] + message[1] + ", " + message[2] + ", and " + message[3] + ".";

    };

    const isDisabled = ! (
        playerType &&
        gameType &&
        gameName !== "" &&
        invalids.every(props.predicate)
    );

    const onClick = () => {
        if (isDisabled) {
            setShowMessage(true)
        }
        else {
            finish();
        }
    };

    return (
        <>
            <Button
                onClick={onClick}
                variant={"contained"}
                className={clsx({[classes.disabled]: isDisabled})}
            >
                Play
            </Button>
            <Dialog open={showMessage} onBackdropClick={() => setShowMessage(false)}>
                <DialogTitle className={classes.dialog}>
                    You haven't entered all the necessary information.
                </DialogTitle>
                <DialogContent className={classes.dialog}>
                    <DialogContentText className={classes.text}>
                        {getMessage()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button className={classes.dialog_button} onClick={() => setShowMessage(false)} variant={"contained"}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Play;