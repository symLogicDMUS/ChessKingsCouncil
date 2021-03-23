import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import {useStyles as useMoreStyles} from "../ProfileWB/ProfileWB.jss";
import {useStyles as useEvenMoreStyles} from "../Header/ProfileHeader.jss";
import { useStyles } from "./ProfileWBAvatar.jss";

export function ProfileWBAvatar(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({theme: props.theme});
    const classes3 = useEvenMoreStyles({theme: props.theme});

    return (
        <Box className={clsx(classes2.sqr_item_area, {
            [classes2.item1]: true,
            [classes2.drawer_item_margins]: props.hasDrawerParent,
            [classes2.profile_wb_drawer_item]: props.hasDrawerParent,
        })}>
            <Box className={clsx(classes2.sqr_item_header, {
                [classes2.profile_wb_drawer_item]: props.hasDrawerParent,
            })}>
                <Typography variant='caption' className={classes2.sqr_item_title}>
                    {resolvePlayerType(props.color)} Image
                </Typography>
            </Box>
            <Box className={clsx(classes2.sqr_item, {
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
