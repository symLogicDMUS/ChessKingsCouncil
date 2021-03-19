import React from "react";
import clsx from "clsx";
import {Avatar} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ImgWindow.jss";

export function ImgWindow({color, setColorAndImgButtons, src, theme, whiteWindow}) {
    const classes = useStyles({theme: theme});
    return (
        <>
            {src ? (
                <img src={src}
                     onClick={setColorAndImgButtons}
                     className={clsx(classes.img_window, {
                         [classes.white_window] : whiteWindow,
                         [classes.black_window] : ! whiteWindow,
                     })} />
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