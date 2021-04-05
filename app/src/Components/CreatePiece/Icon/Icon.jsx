import React, {useState} from "react";
import {ImgWindow} from "./ImgWindow";
import MediaQuery from "react-responsive/src";
import {Portal, Typography} from "@material-ui/core";
import ChooseModal from "./ImgChoicesModal/ImgChoicesModal";
import {MuiMenu} from "../../Reuseables/UserInput/MuiMenu";
import {ImgWindowsModal} from "./ImgWindowsModal";
import {originTransform, useStyles} from "./Icon.jss";

export function Icon({whiteAndBlackImgs, setPieceImg, resetImg, toggleMiniVariantTool, theme}) {
    const classes = useStyles({theme: theme});

    return (
        <div className={classes.icon_tool}>
            <MediaQuery minWidth={960}>
                <Typography className={classes.title}>Icon</Typography>
                <span className={classes.img_windows_flexbox}>
                    <ImgWindow
                        color="white"
                        theme={theme}
                        whiteWindow={true}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        src={whiteAndBlackImgs.white}
                    />
                    <ImgWindow
                        color="black"
                        theme={theme}
                        whiteWindow={false}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        src={whiteAndBlackImgs.black}
                    />
                </span>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <ImgWindowsModal
                    theme={theme}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    <ImgWindow
                        color="white"
                        whiteWindow={true}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        src={whiteAndBlackImgs.white}
                        theme={theme}
                    />
                    <ImgWindow
                        color="black"
                        whiteWindow={false}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        src={whiteAndBlackImgs.black}
                        theme={theme}
                    />
                </ImgWindowsModal>
            </MediaQuery>
        </div>
    );
}