import React from "react";
import clsx from "clsx";
import {Avatar} from "@material-ui/core";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Typography from "@material-ui/core/Typography";
import {borderRadius, useStyles} from "./ImgWindow.jss";

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
                     })}
                     style={borderRadius}
                />
            ) : (
                <Avatar
                    variant="rounded"
                    onClick={setColorAndImgButtons}
                    className={clsx(classes.img_window, {
                        [classes.white_window] : whiteWindow,
                        [classes.black_window] : ! whiteWindow,
                    })}
                    style={borderRadius}
                >
                    <AddPhotoAlternateIcon className={classes.icon} />
                    <Typography variant='caption' className={classes.text}>{color}</Typography>
                </Avatar>
            )}
        </>
    );
}