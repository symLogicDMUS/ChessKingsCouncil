import React, { useState } from "react";
import { MuiButton as Button } from "./MuiButton";
import { StandardModal } from "../Modals/StandardModal";
import { Portal } from "@material-ui/core";
import { useStyles } from "../Modals/StandardModal.jss";


export function MuiDeleteButton(props) {
    const [modal, setModal] = useState(false);

    const classes = useStyles({ theme: props.theme });

    return (
        <>
            {modal ? (
                <Portal>
                    <StandardModal
                        title={props.modalTitle}
                        text={props.modalText}
                        theme={props.theme}
                        closeClick={() => setModal(false)}
                    >
                        <Button
                            onClick={() => {
                                props.onAcceptDelete();
                                setModal(false);
                            }}
                            className={classes.button}
                            addedClassName={classes.yes_button}
                            variant={"contained"}
                            theme={props.theme}
                            size={props.size}
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={() => setModal(false)}
                            className={classes.button}
                            addedClassName={classes.no_button}
                            variant={"contained"}
                            theme={props.theme}
                            size={props.size}
                        >
                            No
                        </Button>
                    </StandardModal>
                </Portal>
            ) : null}
            <Button
                onClick={() => setModal(true)}
                isDisabled={props.isDisabled}
                startIcon={props.startIcon}
                classesObj={props.classesObj}
                addedClassName={props.addedClassName}
                className={props.className}
                variant={props.variant}
                style={props.style}
                theme={props.theme}
                size={props.size}
            >
                {props.altText ? props.altText : "Delete"}
            </Button>
        </>
    );
}
