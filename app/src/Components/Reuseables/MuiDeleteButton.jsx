import React, {useState} from "react";
import {MuiButton as Button} from "./MuiButton";
import {StandardModal} from "./StandardModal";
import {Portal} from "@material-ui/core";
import {button} from "./StandardModal.jss";
import {fontSize002} from "../styles/fontSizes.jss";

/**
 * motivation is that comes with the 'are you sure yes or no' modal that always occurs
 * @param onAcceptDelete
 * @param modalTitle
 * @param modalText
 * @param theme
 * @param style
 * @param classesObj
 * @param variant
 * @param startIcon
 * @param isDisabled
 * @returns {JSX.Element}
 * @constructor
 */
export function MuiDeleteButton({onAcceptDelete, modalTitle, modalText, theme, style, classesObj, variant, startIcon, isDisabled}) {

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
                            style={{...button(fontSize002), marginRight: '1em'}}
                            variant={'contained'}
                            theme={theme}
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={() => setModal(false)}
                            style={{...button(fontSize002), marginLeft: '1em'}}
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
                classesObj={classesObj}
                variant={variant}
                style={style}
                theme={theme}
            >
                Delete
            </Button>
        </>
    )
}