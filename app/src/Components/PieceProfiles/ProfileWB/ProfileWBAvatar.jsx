import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { useStyles } from "./ProfileWBAvatar.jss";

export function ProfileWBAvatar(props) {
    const classes = useStyles({ theme: props.theme, hasDrawerParent: props.hasDrawerParent });

    return (
        <Box className={classes.profile_avatar}>
            <Box className={classes.avatar_header}>
                <Typography className={classes.avatar_title}>
                    {resolvePlayerType(props.color)} Image
                </Typography>
            </Box>
            <Box className={classes.avatar_window}>
                <img
                    src={props.src}
                    className={classes.piece_img}
                    alt={`${props.pieceName} (icon of a piece)`}
                />
            </Box>
        </Box>
    );
}
