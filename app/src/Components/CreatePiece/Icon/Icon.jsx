import React from "react";
import Button from "@material-ui/core/Button";
import {UploadButton} from "./UploadButton";
import {Typography} from "@material-ui/core";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {ImgWindow} from "./ImgWindow";
import {fontSize} from "../../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import {useStyles} from "./Icon.jss";

export function Icon({theme, setPieceImg, showChooseModal, whiteAndBlackImgs}) {
    const classes = useStyles({theme: theme, fontSize: fontSize})

    return (
        <div className={classes.icon_tool}>
            <Box className={classes.box}>
                <Typography className={classes.title}>Icon</Typography>
                {/*<Box className={classes.button_group}>*/}
                {/*    <UploadButton*/}
                {/*        color="black"*/}
                {/*        className={classes.button}*/}
                {/*        setPieceImg={setPieceImg}*/}
                {/*        id={"choose-img2"}*/}
                {/*        theme={theme}*/}
                {/*    />*/}
                {/*    <Button*/}
                {/*        className={classes.button}*/}
                {/*        onClick={() => showChooseModal("black")}*/}
                {/*        startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}*/}
                {/*        variant={"contained"}*/}
                {/*    >*/}
                {/*        Choose*/}
                {/*    </Button>*/}
                {/*</Box>*/}
                <ImgWindow
                    color="White"
                    src={whiteAndBlackImgs["black"]}
                    theme={theme}
                />
                {/*<Box className={classes.button_group}>*/}
                {/*    <UploadButton*/}
                {/*        color="white"*/}
                {/*        className={classes.button}*/}
                {/*        setPieceImg={setPieceImg}*/}
                {/*        id={"choose-img"}*/}
                {/*        theme={theme}*/}
                {/*    />*/}
                {/*    <Button*/}
                {/*        className={classes.button}*/}
                {/*        onClick={() => showChooseModal("white")}*/}
                {/*        startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}*/}
                {/*        variant={"contained"}*/}
                {/*    >*/}
                {/*        Choose*/}
                {/*    </Button>*/}
                {/*</Box>*/}
                <ImgWindow
                    color='Black'
                    src={whiteAndBlackImgs["white"]}
                    theme={theme}
                />
            </Box>
        </div>
    );
}
