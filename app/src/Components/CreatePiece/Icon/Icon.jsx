import React from "react";
import Button from "@material-ui/core/Button";
import {UploadButtonWhite} from "./Upload/UploadButtonWhite";
import {UploadButtonBlack} from "./Upload/UploadButtonBlack";
import {Typography} from "@material-ui/core";
import {useStyles} from "./Icon.jss"


export function Icon({setPieceImg, currentIconColor, setCurrentIconColor, showChooseModal, pieceImg}) {

    const classes = useStyles()

    return (
        <>
            <div className={classes.icon_tool}>
                <Typography className={classes.title}>Icon</Typography>
                <Typography className={classes.white_title}>White</Typography>
                <Typography className={classes.black_title}>Black</Typography>
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
                <Button className={classes.choose_button_white} onClick={() => showChooseModal('white')} variant={'contained'}>
                    Choose...
                </Button>
                <Button className={classes.choose_button_black} onClick={() => showChooseModal('black')} variant={'contained'}>
                    Choose...
                </Button>
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