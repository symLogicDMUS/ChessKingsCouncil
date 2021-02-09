import React from "react";
import Box from "@material-ui/core/Box";
import {Avatar} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import ImageIcon from "@material-ui/icons/Image";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ImgWindowExample.jss";

export function ImgWindowExamples({theme}) {
    const classes = useStyles({theme});
    return (
        <Box className={classes.flexbox}>
            <Avatar
                variant="rounded"
                className={classes.img_window1}
            >
                <ImageIcon className={classes.icon}/>
                <Typography className={classes.img_text}>White</Typography>
            </Avatar>
            <Avatar
                variant="rounded"
                className={classes.img_window2}
            >
                <ImageIcon className={classes.icon}/>
                <Typography className={classes.img_text}>White</Typography>
            </Avatar>
        </Box>
    )
}