import React, {useEffect, useState} from "react";
import {Portal} from "@material-ui/core";
import {MuiButton} from "../../Reuseables/Clickables/MuiButton";
import {StandardModal} from "../../Reuseables/Modals/StandardModal";
import {getDoesPieceNameExist} from "../../../API/getDoesPieceNameExist";
import {containsInvalidCharacters} from "../../helpers/containsInvalidCharacters";
import { useStyles } from "../../Reuseables/Modals/StandardModal.jss";

const Option = React.lazy(() => import('./Option'));
const ToolButtonAlt = React.lazy(() => import('../../Reuseables/Clickables/ToolButtonAlt'));

function Save({save, pieceName, whiteImg, blackImg, theme, className, buttonType, justSaved}) {

    const [pieceNameExists, setPieceNameExists] = useState(false);
    const [message, setMessage] = useState(null);
    const [modal, setModal] = useState(null);

    const classes = useStyles({theme});

    useEffect(() => {
        if (pieceName !== "" && !containsInvalidCharacters(pieceName)) {
            getDoesPieceNameExist(pieceName).then(([result]) => setPieceNameExists(result))
        }
    }, [pieceName])

    const standardPieceNames = ['rook', 'king', 'queen', 'bishop', 'knight'];

    /**see bottom of file*/
    const getSaveStatus = () => {

        if (pieceName === "") {
            return "blank-name";
        }

        if (standardPieceNames.includes(pieceName.toLowerCase())) {
            return "standard-name";
        }

        if (containsInvalidCharacters(pieceName)) {
            return "invalid-characters"
        }

        if (whiteImg === null || blackImg === null) {
            return "no-icon";
        }

        //must be last if statement
        if (pieceNameExists) {
            return "confirm-overwrite";
        }

        return "ready";
    }

    const makeSaveAttempt = () => {
        const saveStatus = getSaveStatus()
        if (saveStatus === 'ready') {
            save()
        } else {
            switch (saveStatus) {
                case 'standard-name':
                    setMessage('Cannot name: King, Pawn, Bishop, Knight, Rook, or Queen')
                    setModal('accept')
                    break;
                case 'blank-name':
                    setMessage('You cannot leave the name field blank')
                    setModal('accept')
                    break;
                case 'invalid-characters':
                    setMessage('a piece name cannot contain these characters: . # $ [ ]')
                    setModal('accept')
                    break;
                case 'no-icon':
                    setMessage('You need an icon for both white and black')
                    setModal('accept')
                    break;
                case 'confirm-overwrite':
                    setMessage(`A piece named ${pieceName} already exists. Do you want to replace it? `)
                    setModal('confirm')
                    break;
                default:
                    break;
            }

        }
    }

    const closeModal = () => {
        setMessage(null);
        setModal(null);
    };

    return (
        <>
            {modal === 'confirm' ? (
                <Portal>
                    <StandardModal
                        title={null}
                        text={message}
                        theme={theme}
                        closeClick={() => closeModal()}
                    >
                        <MuiButton
                            onClick={() => {
                                save()
                                closeModal()
                            }}
                            variant={'contained'}
                            className={classes.button}
                            addedClassName={classes.yes_button}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => {
                                closeModal()
                            }}
                            variant={'contained'}
                            className={classes.button}
                            addedClassName={classes.no_button}
                            theme={theme}
                        >
                            No
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
            {modal === 'accept' ? (
                <Portal>
                    <StandardModal
                        title={message}
                        theme={theme}
                        closeClick={() => {
                            closeModal()
                        }}
                    >
                        <MuiButton
                            onClick={() => {
                                closeModal()
                            }}
                            className={classes.button}
                            variant={'contained'}
                            theme={theme}
                        >
                            Ok
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
            {buttonType === 'option' ? (
                <Option
                    theme={theme}
                    iconType="save"
                    name={"Save"}
                    key='save-option'
                    onClick={makeSaveAttempt}
                    className={className}
                />
            ) : (
                <ToolButtonAlt
                    text="Save"
                    theme={theme}
                    iconName={"save_alt"}
                    isActive={modal || justSaved}
                    onClick={makeSaveAttempt}
                />
            )}
        </>
    )
}
export default Save;
/**
 * from getSaveStatus() arrow function:
 *
 * the cases are used to determine what message to display. they are reset to none after each
 * save attempt:
 *
 * confirm-overwrite: the name given already exists and need to ask if want to save over it.
 * blank-name: name field left blank
 * standard-name: name given was one of of Rook, Bishop, King, Queen or Pawn
 * no-icon: an image was not given for either white or black or both
 * ready: none of the above cases are true so ready to save
 */