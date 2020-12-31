import React from "react";
import Box from "@material-ui/core/Box";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import { Close } from "../../Reuseables/Close";
import { UploadButton } from "./UploadButton";
import { fontSize } from "../../styles/fontSize.jss";
import { MuiButton as Button } from "../../Reuseables/MuiButton";
import { button, close_icon, useStyles } from "./ImgButtonsModal.jss";

export function ImgButtonsModal({
    theme,
    color,
    setPieceImg,
    showChooseModal,
    close
}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.top_flexbox}>
                    <Close
                        theme={theme}
                        style={close_icon(fontSize)}
                        onClick={close}
                    />
                </Box>
                <Box className={classes.button_group}>
                    <UploadButton
                        color={color}
                        id='choose-img'
                        theme={theme}
                        style={button(fontSize)}
                        setPieceImg={setPieceImg}
                        close={close}
                    />
                    <Button
                        variant='contained'
                        onClick={() => showChooseModal(color)}
                        startIcon={<InsertPhotoIcon fontSize={"inherit"} />}
                        style={button(fontSize)}
                        theme={theme}
                    >
                        Choose
                    </Button>
                </Box>
            </Box>
        </div>
    );
}
