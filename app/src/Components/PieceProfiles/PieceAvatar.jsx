import React from "react";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import { getColorName } from "../helpers/getColorName";
import { fontSize } from "../styles/fontSize.jss";
import { useStyles } from "./PieceAvatar.jss";

export function PieceAvatar(props) {
    const classes = useStyles({ theme: props.theme, fontSize: fontSize*1.25 });

    return (
        <Box className={classes.piece_avatar} border='1px dashed #b1faae' backgroundColor='red'>
            <Typography className={classes.avatar_title}>
                {getColorName(props.color)} Image
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
