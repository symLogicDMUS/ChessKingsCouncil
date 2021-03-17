import React from "react";
import Box from "@material-ui/core/Box";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import { Close } from "../../Reuseables/Modals/Close";
import { UploadImgButton } from "./UploadImgButton";
import { fontSize002 } from "../../styles/fontSizes.jss";
import { MuiButton as Button } from "../../Reuseables/Clickables/MuiButton";
import { button, close_icon, useStyles } from "./ImgButtonsModal.jss";

export function ImgButtonsModal({
    theme,
    color,
    setPieceImg,
    showChooseModal,
    close
}) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        theme={theme}
                        style={close_icon(fontSize002)}
                        onClick={close}
                    />
                </Box>
                <Box className={classes.button_group}>
                    <UploadImgButton
                        color={color}
                        id='choose-img'
                        theme={theme}
                        style={button(fontSize002)}
                        setPieceImg={setPieceImg}
                        close={close}
                    />
                    <Button
                        variant='contained'
                        onClick={() => showChooseModal(color)}
                        startIcon={<InsertPhotoIcon style={{fontSize: 'inherit'}} />}
                        style={button(fontSize002)}
                        theme={theme}
                    >
                        Choose
                    </Button>
                </Box>
            </Box>
        </div>
    );
}
