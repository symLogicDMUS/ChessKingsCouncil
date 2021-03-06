import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {fontSize002} from "../../styles/fontSizes.jss";
import {button, useStyles} from "./SaveAs.jss";

export function SaveAs({changeName, save, close, theme}) {

    const classes = useStyles({theme: theme});

    const handleChange = (e) => {
        changeName(e.target.value);
    };

    return (
        <div className={classes.modal}>
            <Dialog
                open={true}
                classes={{
                    container: classes.container,
                    paper: classes.dialog_window
                }}
                aria-labelledby="title"
            >
                <DialogTitle id="title" className={classes.title}>Save As</DialogTitle>
                <DialogContent>
                    <MuiTextField
                        id="name"
                        theme={theme}
                        fullWidth={true}
                        autoFocus={true}
                        margin="dense"
                        label="Enter new name of game"
                        variant={"outlined"}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions className={classes.dialog_actions}>
                    <Button
                        onClick={() => {
                            close();
                            save();
                        }}
                        style={button(theme)}
                        startIcon={<CheckCircleOutlineIcon/>}
                    >
                        Ok
                    </Button>
                    <Button
                        onClick={close}
                        style={button(theme)}
                        startIcon={<HighlightOffIcon/>}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
