import React from "react";
import Button from "@material-ui/core/Button";
import {UploadButton} from "./UploadButton";
import {Typography} from "@material-ui/core";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import {ImgWindow} from "./ImgWindow";
import {fontSize} from "../em.jss";
import {useStyles} from "./Icon.jss"

export function Icon({setPieceImg, showChooseModal, whiteAndBlackImgs}) {

    const classes = useStyles({fontSize})

    return (
        <div className={classes.icon_tool}>
            <Typography className={classes.title}>Icon</Typography>
            <UploadButton
                color="white"
                className={classes.upload_white}
                setPieceImg={setPieceImg}
                id={'choose-img'}
            />
            <UploadButton
                color="black"
                className={classes.upload_black}
                setPieceImg={setPieceImg}
                id={'choose-img2'}
            />
            <Button
                className={classes.choose_button_white}
                onClick={() => showChooseModal('white')}
                startIcon={<InsertPhotoIcon fontSize={'inherit'}/>} variant={'contained'}
            >
                Choose
            </Button>
            <Button
                className={classes.choose_button_black}
                onClick={() => showChooseModal('black')}
                startIcon={<InsertPhotoIcon fontSize={'inherit'}/>} variant={'contained'}
            >
                Choose
            </Button>
            <ImgWindow className={classes.white_window} src={whiteAndBlackImgs['white']}/>
            <ImgWindow className={classes.black_window} src={whiteAndBlackImgs['black']}/>
        </div>
    );
}