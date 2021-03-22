import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import {useStyles as useMoreStyles} from "../ProfileWB/ProfileWB.jss";
import { useStyles } from "./ProfileWBAvatar.jss";

export function ProfileWBAvatar(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({theme: props.theme});

    return (
        <Box className={clsx(classes.profile_avatar, {
            [classes2.drawer_item_margins]: props.hasDrawerParent,
            [classes2.profile_wb_drawer_item]: props.hasDrawerParent,
        })}>
            <Box className={clsx(classes.avatar_header, {
                [classes2.profile_wb_drawer_item]: props.hasDrawerParent,
            })}>
                <Typography className={classes.avatar_title}>
                    {resolvePlayerType(props.color)} Image
                </Typography>
            </Box>
            <Box className={clsx(classes.avatar_window, {
                [classes2.profile_wb_drawer_item]: props.hasDrawerParent,
            })}>
                <img
                    src={props.src}
                    className={classes.piece_img}
                    alt={`${props.pieceName} (icon of a piece)`}
                />
            </Box>
        </Box>
    );
}
