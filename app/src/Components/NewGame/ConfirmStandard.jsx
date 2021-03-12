import React from "react";
import {Portal} from "@material-ui/core";
import {StandardModal} from "../Reuseables/Modals/StandardModal";
import {MuiButton} from "../Reuseables/Clickables/MuiButton";

export function ConfirmStandard(props) {
    return <Portal>
        <StandardModal
            theme={props.theme}
            title={"Are you sure you don't want to try Custom?"}
            text={"Exercise your creativity with the exciting custom feature, create your own unique Chess game!"}
            closeClick={props.closeClick}
        >
            <MuiButton onClick={props.onClick} theme={props.theme}>
                Show me the customization!
            </MuiButton>
            <MuiButton onClick={props.closeClick} theme={props.theme}>
                No I want to play regular old Chess.
            </MuiButton>
        </StandardModal>
    </Portal>;
}