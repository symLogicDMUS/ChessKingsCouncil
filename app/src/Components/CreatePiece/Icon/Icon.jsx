import React, {memo, useState} from "react";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import {Portal, Typography} from "@material-ui/core";
import ChooseModal from "./ImgChoicesModal/ImgChoicesModal";
import {ImgButtonsModal} from "./ImgButtonsModal";
import {ImgWindowsModal} from "./ImgWindowsModal";
import {ImgWindow} from "./ImgWindow";
import {useStyles} from "./Icon.jss";
import MediaQuery from "react-responsive/src";

export function Icon({whiteAndBlackImgs, setPieceImg, resetImg, theme}) {
    const [color, setColor] = useState(null);
    const [imgButtonsModal, toggleImgButtonsModal] = useState(false);
    const [chooseModal, toggleChooseModal] = useState(false);
    const classes = useStyles({theme: theme});

    const ImgWindows = memo(() => (
        <>
            <ImgWindow
                color="White"
                theme={theme}
                whiteWindow={true}
                src={whiteAndBlackImgs.white}
                setColorAndImgButtons={() => {
                    setColor("white");
                    toggleImgButtonsModal(true);
                }}
            />
            <ImgWindow
                color="Black"
                theme={theme}
                whiteWindow={false}
                src={whiteAndBlackImgs.black}
                setColorAndImgButtons={() => {
                    setColor("black");
                    toggleImgButtonsModal(true);
                }}
            />
        </>
    ))

    return (
        <div className={classes.icon_tool}>
            {chooseModal ? (
                <Portal>
                    <ChooseModal
                        closeAll={() => {
                            toggleChooseModal(false);
                            toggleImgButtonsModal(false);
                            setColor(null);
                        }}
                        color={color}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        theme={theme}
                    />
                </Portal>
            ) : null}
            {imgButtonsModal ? (
                <Portal>
                    <ImgButtonsModal
                        color={color}
                        theme={theme}
                        setPieceImg={setPieceImg}
                        showChooseModal={() => toggleChooseModal(true)}
                        close={() => toggleImgButtonsModal(null)}
                    />
                </Portal>
            ) : null}
            <MediaQuery minWidth={960}>
                <Typography className={classes.title}>Icon</Typography>
                <Box className={classes.img_windows_flexbox}>
                    <ImgWindows />
                </Box>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <ImgWindowsModal theme={theme}>
                    <Box className={classes.img_windows_flexbox}>
                        <ImgWindows />
                    </Box>
                </ImgWindowsModal>
            </MediaQuery>
        </div>
    );
}