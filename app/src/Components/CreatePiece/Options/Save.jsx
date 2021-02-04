import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Portal} from "@material-ui/core";
import {Option} from "./Option";
import {StandardModal} from "../../Reuseables/StandardModal";
import {getDoesPieceNameExist} from "../../../API/getDoesPieceNameExist";
import {containsInvalidCharacters} from "../../helpers/containsInvalidCharacters";
import {MuiButton} from "../../Reuseables/MuiButton";
import {button} from "../../Reuseables/StandardModal.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function Save({save, pieceName, whiteImg, blackImg, theme}) {

    let [pieceNameExists, setPieceNameExists] = useState(false);
    let [message, setMessage] = useState(null);
    let [modal, setModal] = useState(null);

    useEffect(() => {
        if (pieceName !== "" && !containsInvalidCharacters(pieceName)) {
            getDoesPieceNameExist(pieceName).then(([result]) => setPieceNameExists(result))
        }
    }, [])

    const standardPieceNames = ['rook', 'king', 'queen', 'bishop', 'knight'];

    /**see bottom of file*/
    const getSaveStatus = () => {

        if (pieceName === "") {
            return "blank-name";
        }

        if (standardPieceNames.includes(pieceName.toLowerCase())) {
            return "standard-name";
        }

        if (pieceNameExists) {
            return "confirm-overwrite";
        }

        if (containsInvalidCharacters(pieceName)) {
            return "invalid-characters"
        }

        if (whiteImg === null || blackImg === null) {
            return "no-icon";
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
                case 'invalid-character':
                    setMessage('a piece name cannot contain characters ".", "#", "$", "[", or "]"')
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
                            style={{...button(fontSize002), marginRight: '1em'}}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => closeModal()}
                            variant={'contained'}
                            style={{...button(fontSize002), marginLeft: '1em'}}
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
                        closeClick={() => closeModal()}
                    >
                        <MuiButton
                            onClick={() => closeModal()}
                            style={button(fontSize002)}
                            variant={'contained'}
                            theme={theme}
                        >
                            Ok
                        </MuiButton>
                    </StandardModal>
                </Portal>
                ) : null}
            <Option
                onClick={makeSaveAttempt}
                iconType="save"
                theme={theme}
                key={uuidv4()}
            />
        </>
    )
}

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