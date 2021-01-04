import React, {useState} from "react";
import {MuiButton as Button} from "./MuiButton";
import {StandardModal} from "./StandardModal";
import {Portal} from "@material-ui/core";
import {button} from "./StandardModal.jss";
import {fontSize} from "../styles/fontSize.jss";

export function MuiDeleteButton({onAcceptDelete, modalTitle, modalText, theme, style, variant, startIcon, isDisabled}) {

    let [modal, setModal] = useState();

    return (
        <>
            {modal ? (
                <Portal>
                    <StandardModal
                        title={modalTitle}
                        text={modalText}
                        theme={theme}
                        closeClick={() => setModal(false)}
                    >
                        <Button
                            onClick={() => {
                                setModal(false)
                                onAcceptDelete()
                            }}
                            style={button(fontSize)}
                            variant={'contained'}
                            theme={theme}
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={() => setModal(false)}
                            style={button(fontSize)}
                            variant={'contained'}
                            theme={theme}
                        >
                            No
                        </Button>
                    </StandardModal>
                </Portal>
            ) : null}
            <Button
                onClick={() => setModal(true)}
                isDisabled={isDisabled}
                startIcon={startIcon}
                variant={variant}
                style={style}
                theme={theme}
            >
                Delete
            </Button>
        </>
    )
}