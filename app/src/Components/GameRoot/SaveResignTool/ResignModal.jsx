import React from "react";
import {Portal} from "@material-ui/core";
import {StandardModal} from "../../Reuseables/Modals/StandardModal";
import {MuiButton} from "../../Reuseables/Clickables/MuiButton";
import {useStyles} from "./SaveResignTool.jss";

export function ResignModal({onClick, onClick1, theme}) {
    const classes = useStyles({theme});
    return <Portal>
        <StandardModal title='Are you sure you want to resign?' theme={theme}>
            <MuiButton
                onClick={onClick}
                classProp={classes.button}
                variant={"contained"}
                theme={theme}
            >
                Yes
            </MuiButton>
            <MuiButton
                onClick={onClick1}
                classProp={classes.button}
                variant={"contained"}
                theme={theme}
            >
                No
            </MuiButton>
        </StandardModal>
    </Portal>;
}