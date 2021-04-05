import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { MuiButton } from "../../Reuseables/Clickables/MuiButton";
import ChooseModal from "./ImgChoicesModal/ImgChoicesModal";
import { useStyles } from "./ChooseButton.jss";

export function ChooseButton({
    handleMobileMenuClose,
    setPieceImg,
    resetImg,
    color,
    theme,
    startIcon,
    children,
}) {
    const [imgChoicesModal, setImgChoicesModal] = useState(false);

    const classes = useStyles({ theme });
    return (
        <>
            {imgChoicesModal ? (
                <Portal>
                    <ChooseModal
                        color={color}
                        theme={theme}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        close={() => setImgChoicesModal(false)}
                    />
                </Portal>
            ) : null}
            <MuiButton
                theme={theme}
                startIcon={startIcon}
                className={classes.button}
                onClick={() => {
                    handleMobileMenuClose()
                    setImgChoicesModal(true)
                }}
            >
                {children}
            </MuiButton>
        </>
    );
}
