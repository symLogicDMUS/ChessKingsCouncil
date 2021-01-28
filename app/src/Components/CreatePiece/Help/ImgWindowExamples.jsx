import React from "react";
import Box from "@material-ui/core/Box";
import {Avatar} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../Icon/ImgWindow.jss";

export function ImgWindowExamples({theme}) {
    const classes = useStyles({theme});
    return (
        <Box style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <Avatar
                variant="rounded"
                className={classes.img_window}
                style={{marginRight: '1em'}}
            >
                <ImageIcon className={classes.icon} />
                <Typography className={classes.text}>White</Typography>
            </Avatar>
            <Avatar
                variant="rounded"
                className={classes.img_window}
                style={{marginLeft: '1em'}}
            >
                <ImageIcon className={classes.icon} />
                <Typography className={classes.text}>White</Typography>
            </Avatar>
        </Box>
    )
}