import React from "react";
import {Avatar, SvgIcon} from "@material-ui/core";
import {fontSize} from "../../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import ImageIcon from '@material-ui/icons/Image';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ImgWindow.jss";

export function ImgWindow({color, toggleImgButtonsModal, src, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme});
    return (
        <Box className={classes.img_window} onClick={() => toggleImgButtonsModal(true)} variant='rounded'>
            <Box className={classes.img_label} src={src} variant='rounded'>
                <ImageIcon className={classes.icon} />
                <Typography className={classes.text}>{color}</Typography>
            </Box>
        </Box>
    );
}