import React from "react";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import { resolvePlayerType } from "../helpers/resolvePlayerType";
import { fontSizeAlt2 as fontSize } from "../styles/fontSize.jss";
import { useStyles } from "./ProfileAvatar.jss";

export function ProfileAvatar(props) {
    const classes = useStyles({ theme: props.theme, fontSize: fontSize });

    return (
        <Box className={classes.profile_avatar} backgroundColor='red'>
            <Typography className={classes.avatar_title}>
                {resolvePlayerType(props.color)} Image
            </Typography>
            <Avatar
                src={props.src}
                className={classes.avatar_window}
                alt={`${props.pieceName} (icon of a piece)`}
                variant='square'
            >
                <ImageIcon />
            </Avatar>
        </Box>
    );
}
