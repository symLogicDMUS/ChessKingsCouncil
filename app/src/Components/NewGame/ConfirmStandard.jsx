import React from "react";
import {Portal} from "@material-ui/core";
import {StandardModal} from "../Reuseables/Modals/StandardModal";
import {MuiButton} from "../Reuseables/Clickables/MuiButton";
import { useStyles } from "./ConfirmStandard.jss";

export function ConfirmStandard(props) {
    const classes = useStyles();
    return <Portal>
        <StandardModal
            theme={props.theme}
            title={"Are you sure you don't want to try Custom?"}
            text={"Exercise your creativity with the exciting custom feature, create your own unique Chess game!"}
            closeClick={props.closeClick}
        >
            <MuiButton onClick={props.onClick} className={classes.button1} theme={props.theme}>
                Show me the customization!
            </MuiButton>
            <MuiButton onClick={props.closeClick} className={classes.button2} theme={props.theme}>
                No I want to play regular old Chess.
            </MuiButton>
        </StandardModal>
    </Portal>;
}