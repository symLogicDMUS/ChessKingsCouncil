import React from "react";
import {Avatar} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ImgWindow.jss";

export function ImgWindow({color, setColorAndImgButtons, src, theme}) {
    const classes = useStyles({theme: theme});
    return (
        <>
            {src ? (
                <img src={src}
                     onClick={setColorAndImgButtons}
                     className={classes.img_window} />
            ) : (
                <Avatar
                    variant="rounded"
                    onClick={setColorAndImgButtons}
                    className={classes.img_window}
                >
                    <ImageIcon className={classes.icon} />
                    <Typography className={classes.text}>{color}</Typography>
                </Avatar>
            )}
        </>
    );
}