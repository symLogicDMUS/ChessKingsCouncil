import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import {ButtonGroup} from "@material-ui/core";
import {UploadButton} from "./UploadButton";
import {Close} from "../../Reuseables/Close";
import {fontSize} from "../../styles/fontSize.jss";
import {close_icon, useStyles} from "./ImgButtonsModal.jss";

export function ImgButtonsModal({
                                    theme,
                                    setPieceImg,
                                    showChooseModal,
                                    toggleImgButtonsModal,
                                }) {
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        theme={theme}
                        style={close_icon(fontSize)}
                        onClick={() => toggleImgButtonsModal(false)}
                    />
                </Box>
                <Box className={classes.button_group}>
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
                        variant="contained"
                    >
                        Choose
                    </Button>
                </Box>
            </Box>
        </div>
    );
}
