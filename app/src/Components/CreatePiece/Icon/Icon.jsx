import React, {memo, useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {Portal, Typography} from "@material-ui/core";
import ChooseModal from "./ImgChoicesModal/ImgChoicesModal";
import {ImgButtonsModal} from "./ImgButtonsModal";
import {ImgWindowsModal} from "./ImgWindowsModal";
import {ImgWindow} from "./ImgWindow";
import {useStyles} from "./Icon.jss";

export function Icon({whiteAndBlackImgs, setPieceImg, resetImg, theme}) {
    const [color, setColor] = useState(null);
    const [imgButtonsModal, toggleImgButtonsModal] = useState(false);
    const [chooseModal, toggleChooseModal] = useState(false);
    const classes = useStyles({theme: theme});

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
                </Box>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <ImgWindowsModal theme={theme}>
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
                </ImgWindowsModal>
            </MediaQuery>
        </div>
    );
}