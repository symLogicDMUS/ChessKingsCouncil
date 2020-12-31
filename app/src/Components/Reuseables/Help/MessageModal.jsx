import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fontSize} from "../../styles/fontSize.jss";
import {MuiButton} from "../MuiButton";
import {Close} from "../Close";
import {ok_button, close_icon, useStyles} from "./MessageModal.jss";


export function MessageModal({theme, toggleMessageModal, messageTitle, messageText}) {

    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close onClick={toggleMessageModal} style={close_icon(fontSize, theme)} theme={theme} />
                </Box>
                <Typography className={classes.title} noWrap={true}>{messageTitle}</Typography>
                <Typography className={classes.text} paragraph={true} noWrap={true}>{messageText}</Typography>
                <MuiButton onClick={toggleMessageModal} theme={theme} style={ok_button(fontSize)}>
                    Ok
                </MuiButton>
            </div>
        </div>
    );
}