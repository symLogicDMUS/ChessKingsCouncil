import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { ImgWindow } from "./ImgWindow";
import { fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./Icon.jss";
import MediaQuery from "react-responsive";

export function Icon({ theme, whiteAndBlackImgs, toggleImgButtonsModal }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    return (
        <div className={classes.icon_tool}>
            <Box className={classes.flexbox}>
                <MediaQuery minDeviceWidth={768}>
                    <Typography className={classes.title}>Icon</Typography>
                </MediaQuery>
                <ImgWindow
                    color="White"
                    theme={theme}
                    src={whiteAndBlackImgs.black}
                    toggleImgButtonsModal={() => toggleImgButtonsModal("black")}
                />
                <ImgWindow
                    color="Black"
                    theme={theme}
                    src={whiteAndBlackImgs.white}
                    toggleImgButtonsModal={() => toggleImgButtonsModal("white")}
                />
            </Box>
        </div>
    );
}
