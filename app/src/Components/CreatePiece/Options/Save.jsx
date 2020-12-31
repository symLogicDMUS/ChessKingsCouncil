import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Portal} from "@material-ui/core";
import {ConfirmModal} from "../../Reuseables/ConfirmModal";
import {MessageModal} from "../../Reuseables/Help/MessageModal";
import {getDoesPieceNameExist} from "../../../API/getDoesPieceNameExist";
import {containsInvalidCharacters} from "../../helpers/containsInvalidCharacters";
import {Option} from "./Option";

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
        if (pieceNameExists) {
            return "confirm-overwrite";
        }

        if (pieceName === "") {
            return "blank-name";
        }

        if (containsInvalidCharacters(pieceName)) {
            return "invalid-characters"
        }

        if (standardPieceNames.includes(pieceName.toLowerCase())) {
            return "standard-name";
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
                    setMessage('You cannot use the name of one of the 6 standard pieces: King, Pawn, Bishop, Knight, Rook, and Queen')
                    setModal('accept')
                    break;
                case 'blank-name':
                    setMessage('You cannot leave the name field blank')
                    setModal('accept')
                    break;
                case 'invalid-character':
                    setMessage('a piece name cannot contain characters ".", "#", "$", "[", or "]"')
                    setModal('accept')
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
                    <ConfirmModal
                        yesClick={() => save()}
                        noClick={() => closeModal()}
                        closeClick={() => closeModal()}
                        theme={theme}
                        title={null}
                        text={message}
                    />
                </Portal>
            ) : null}
            {modal === 'accept' ? (
                <MessageModal
                    theme={theme}
                    messageTitle={null}
                    messageText={message}
                    toggleMessageModal={() => closeModal()}
                />
            ) : null}
            <Option
                clickMethod={makeSaveAttempt}
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