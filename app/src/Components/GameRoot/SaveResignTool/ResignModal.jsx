import React from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {StandardModal} from "../../Reuseables/Modals/StandardModal";
import {useStyles} from "./SaveResignTool.jss";

export function ResignModal({onYesClick, onNoClick, theme}) {
    const classes = useStyles({theme});

    return <Portal>
        <StandardModal title='Are you sure you want to resign?' theme={theme} closeClick={onNoClick}>
            <Button
                variant={'contained'}
                className={clsx(classes.button, {
                    [classes.yes_button]: true,
                })}
                onClick={onYesClick}
            >
                Yes
            </Button>
            <Button
                variant={'contained'}
                classes={{root: clsx(classes.button, {
                        [classes.no_button]: true,
                    })}}
                onClick={onNoClick}
            >
                No
            </Button>
        </StandardModal>
    </Portal>;
}