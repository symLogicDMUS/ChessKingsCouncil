import React from "react";
import {ImgWindow} from "./ImgWindow";
import {Typography} from "@material-ui/core";
import {useStyles} from "./Icon.jss";

function Icon({whiteAndBlackImgs, setPieceImg, resetImg, theme}) {
    const classes = useStyles({theme: theme});

    return (
        <>
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
        </>
    );
}

export default Icon;