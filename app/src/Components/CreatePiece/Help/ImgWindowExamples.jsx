import React from "react";
import Box from "@material-ui/core/Box";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {useStyles} from "./ImgWindowExample.jss";


export function ImgWindowExamples({theme}) {
    const classes = useStyles({theme});
    return (
        <Box className={classes.windows_area}>
            <Avatar
                variant="rounded"
                className={classes.img_window}
            >
                <AddPhotoAlternateIcon className={classes.icon}/>
                <Typography className={classes.text}>White</Typography>
            </Avatar>
            <Avatar
                variant="rounded"
                className={classes.img_window}
            >
                <AddPhotoAlternateIcon className={classes.icon}/>
                <Typography className={classes.text}>Black</Typography>
            </Avatar>
        </Box>
    )
}