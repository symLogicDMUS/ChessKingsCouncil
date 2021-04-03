import React from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {StandardModal} from "../../Reuseables/Modals/StandardModal";
import {MuiButton} from "../../Reuseables/Clickables/MuiButton";
import {useStyles} from "./SaveResignTool.jss";

export function ResignModal({onYesClick, onNoClick, theme}) {
    const classes = useStyles({theme});

    return <Portal>
        <StandardModal title='Are you sure you want to resign?' theme={theme} closeClick={onNoClick}>
            <MuiButton
                theme={theme}
                variant={'outline'}
                rootClassName={
                    clsx(classes.button, {
                        [classes.yes_button]: true,
                    })}
                onClick={onYesClick}
            >
                Yes
            </MuiButton>
            <MuiButton
                theme={theme}
                variant={'outline'}
                rootClassName={
                    clsx(classes.button, {
                        [classes.no_button]: true,
                })}
                onClick={onNoClick}
            >
                No
            </MuiButton>
        </StandardModal>
    </Portal>;
}