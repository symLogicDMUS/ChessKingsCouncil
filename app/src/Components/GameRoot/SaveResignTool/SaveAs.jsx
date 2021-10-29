import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { MuiTextField } from "../../Reuseables/UserInput/MuiTextField";
import { useStyles } from "./SaveAs.jss";
import clsx from "clsx";

function SaveAs({ changeName, save, close, theme }) {
    const classes = useStyles({ theme: theme });

    const handleChange = (e) => {
        changeName(e.target.value);
    };

    return (
        <Dialog
            open={true}
            classes={{
                container: classes.container,
                paper: classes.dialog_window,
            }}
            aria-labelledby="title"
            onBackdropClick={close}
        >
            <DialogTitle id="title" className={classes.title}>
                Save As
            </DialogTitle>
            <DialogContent>
                <MuiTextField
                    id="name"
                    fullWidth={true}
                    autoFocus={true}
                    margin="dense"
                    label="Enter new name of game"
                    variant={"outlined"}
                    className={classes.text_field}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions className={classes.dialog_actions}>
                <Button
                    onClick={save}
                    className={clsx(classes.button, {
                        [classes.primary]: true,
                    })}
                    variant={"contained"}
                >
                    Save
                </Button>
                <Button
                    onClick={close}
                    className={clsx(classes.button, {
                        [classes.secondary]: true,
                    })}
                    variant={"text"}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SaveAs;
