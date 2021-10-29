import React from "react";
import clsx from "clsx";
import { Button, Portal } from "@material-ui/core";
import { StandardModal } from "../../Reuseables/Modals/StandardModal";
import { useStyles } from "./ResignModal.jss";

function ResignWindow({ onYesClick, onNoClick, theme }) {
    const classes = useStyles({ theme });

    return (
        <Portal>
            <StandardModal
                title="Are you sure you want to resign?"
                theme={theme}
                closeClick={onNoClick}
            >
                <Button
                    theme={theme}
                    variant={"text"}
                    className={clsx(classes.button, {
                        [classes.secondary]: true,
                    })}
                    onClick={onYesClick}
                >
                    Resign
                </Button>
                <Button
                    theme={theme}
                    variant={"contained"}
                    className={clsx(classes.button, {
                        [classes.primary]: true,
                    })}
                    onClick={onNoClick}
                >
                    Cancel
                </Button>
            </StandardModal>
        </Portal>
    );
}

export default ResignWindow;
