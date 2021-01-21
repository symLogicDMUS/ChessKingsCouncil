import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Portal, Typography } from "@material-ui/core";
import { ImgWindow } from "./ImgWindow";
import { fontSize002 } from "../../styles/fontSize.jss";
import { useStyles } from "./Icon.jss";
import MediaQuery from "react-responsive";
import ChooseModal from "./ChooseModal/ChooseModal";
import { ImgButtonsModal } from "./ImgButtonsModal";

export function Icon({ whiteAndBlackImgs, setPieceImg, resetImg, theme }) {
    let [color, setColor] = useState(null);
    let [imgButtonsModal, toggleImgButtonsModal] = useState(false);
    let [chooseModal, toggleChooseModal] = useState(false);
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });

    return (
        <>
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
            <div className={classes.icon_tool}>
                <Box className={classes.flexbox}>
                    <MediaQuery minDeviceWidth={768}>
                        <Typography className={classes.title}>Icon</Typography>
                    </MediaQuery>
                    <ImgWindow
                        color="White"
                        theme={theme}
                        src={whiteAndBlackImgs.white}
                        setColorAndImgButtons={() => {
                            setColor("white");
                            toggleImgButtonsModal(true);
                        }}
                    />
                    <ImgWindow
                        color="Black"
                        theme={theme}
                        src={whiteAndBlackImgs.black}
                        setColorAndImgButtons={() => {
                            setColor("black");
                            toggleImgButtonsModal(true);
                        }}
                    />
                </Box>
            </div>
        </>
    );
}
