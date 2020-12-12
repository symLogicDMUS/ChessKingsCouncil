import React from "react";
import Button from "@material-ui/core/Button";
import {UploadButton} from "./UploadButton";
import {Typography} from "@material-ui/core";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {ImgWindow} from "./ImgWindow";
import {fontSize} from "../em.jss";
import {useStyles} from "./Icon.jss";
import Box from "@material-ui/core/Box";

export function Icon({theme, setPieceImg, showChooseModal, whiteAndBlackImgs}) {
    const classes = useStyles({theme: theme, fontSize: fontSize})

    return (
        <div className={classes.icon_tool}>
            {/*<Typography className={classes.title}>Icon</Typography>*/}
            <ButtonGroup orientation='vertical' className={classes.button_group}>
                <UploadButton
                    color="white"
                    className={classes.button}
                    setPieceImg={setPieceImg}
                    id={"choose-img"}
                    theme={theme}
                />
                <Button
                    className={classes.button}
                    onClick={() => showChooseModal("white")}
                    startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}
                    variant={"contained"}
                >
                    Choose
                </Button>
                <UploadButton
                    color="black"
                    className={classes.button}
                    setPieceImg={setPieceImg}
                    id={"choose-img2"}
                    theme={theme}
                />
                <Button
                    className={classes.button}
                    onClick={() => showChooseModal("black")}
                    startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}
                    variant={"contained"}
                >
                    Choose
                </Button>
            </ButtonGroup>
            <Box display='flex' flexDirection='column'>
                <ImgWindow
                    color="white"
                    className={classes.white_window}
                    src={whiteAndBlackImgs["white"]}
                    theme={theme}
                />
                <ImgWindow
                    color="black"
                    className={classes.black_window}
                    src={whiteAndBlackImgs["black"]}
                    theme={theme}
                />
            </Box>
        </div>
    );
}
