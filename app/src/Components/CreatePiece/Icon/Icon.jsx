import React from "react";
import {ImgWindow} from "./ImgWindow";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import {ImgWindowsModal} from "./ImgWindowsModal";
import {useStyles} from "./Icon.jss";
import Box from "@material-ui/core/Box";

export function Icon({whiteAndBlackImgs, setPieceImg, resetImg, miniVariantTool, toggleMiniVariantTool, theme}) {
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
                    resetImg={resetImg}
                    setPieceImg={setPieceImg}
                    miniVariantTool={miniVariantTool}
                    whiteAndBlackImgs={whiteAndBlackImgs}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                />
            </MediaQuery>
        </div>
    );
}