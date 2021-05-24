import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { MuiButton } from "../../Reuseables/Clickables/MuiButton";
import { useStyles } from "./ChooseButton.jss";

const ImgChoicesModal = React.lazy(() => import('./ImgChoicesModal/ImgChoicesModal'));

export function ChooseButton(props) {
    const {
        handleMobileMenuClose,
        setImgFileObj,
        setPieceImg,
        resetImg,
        color,
        theme,
        startIcon,
        children,
    } = props;

    const [imgChoicesModal, setImgChoicesModal] = useState(false);

    const classes = useStyles({ theme });
    return (
        <>
            {imgChoicesModal ? (
                <Portal>
                    <ImgChoicesModal
                        color={color}
                        theme={theme}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        setImgFileObj={setImgFileObj}
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
