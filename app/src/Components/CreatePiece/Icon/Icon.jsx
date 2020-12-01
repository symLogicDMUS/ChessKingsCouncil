import React from "react";
import {ChooseButton} from "./Choose/ChooseButton";
import UploadButtonWhite from "./Upload/UploadButtonWhite";
import UploadButtonBlack from "./Upload/UploadButtonBlack";
import {useStyles} from "./Icon.jss"

export function Icon({setPieceImg, currentIconColor, setCurrentIconColor, showChooseModal, pieceImg}) {

    const classes = useStyles()

    return (
        <>
            <div className={classes.icon_tool}>
                <div className={classes.title}>Icon</div>
                <div className={classes.white_title}>White</div>
                <div className={classes.black_title}>Black</div>
                <UploadButtonWhite
                    color="white"
                    setPieceImg={setPieceImg}
                    currentIconColor={currentIconColor}
                    setCurrentIconColor={setCurrentIconColor}
                />
                <UploadButtonBlack
                    color="black"
                    setPieceImg={setPieceImg}
                    currentIconColor={currentIconColor}
                    setCurrentIconColor={setCurrentIconColor}
                />
                <ChooseButton showChooseModal={showChooseModal} color="white"/>
                <ChooseButton showChooseModal={showChooseModal} color="black"/>
                <div className={classes.white_window}>
                    {pieceImg["white"] ? (
                        <img src={pieceImg["white"]} className={classes.image}/>
                    ) : null}
                </div>
                <div className={classes.black_window}>
                    {pieceImg["black"] ? (
                        <img src={pieceImg["black"]} className={classes.image}/>
                    ) : null}
                </div>
            </div>
        </>
    );
}