import React from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../../Reuseables/Modals/Close";
import Typography from "@material-ui/core/Typography";
import {close_icon, useStyles} from "./NoProfile.jss";

export function NoProfile({pieceName, pieceImgBase64Str, closeProfile, theme}) {
    const classes = useStyles({theme: theme});
    return (
        <Box className={classes.profile_flexbox}>
            <Box className={classes.profile_top}>
                <Close
                    style={close_icon()}
                    onClick={closeProfile}
                    theme={theme}
                />
            </Box>
            <Box className={classes.content}>
                <Typography variant='h6'  className={classes.caption}>
                    No profile for {pieceName}
                </Typography>
                <img src={pieceImgBase64Str} className={classes.inline_piece}/>
            </Box>
        </Box>
    );
}