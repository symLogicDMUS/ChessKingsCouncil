import React from "react";
import {ImgWindow} from "./ImgWindow";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import {ImgWindowsModal} from "./ImgWindowsModal";
import {useStyles} from "./Icon.jss";

function Icon({whiteAndBlackImgs, setPieceImg, resetImg, miniVariantTool, toggleMiniVariantTool, theme}) {
    const classes = useStyles({theme: theme});

    return (
        <>
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
        </>
    );
}

export default Icon;