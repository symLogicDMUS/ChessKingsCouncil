import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import {useStyles as useMoreStyles} from "../ProfileWB/ProfileWB.jss";
import { useStyles } from "./ProfileWBAvatar.jss";

const ProfileWBAvatar = memo(function WrappedComponent({src, pieceName, color, hasDrawerParent, theme}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({theme: theme});

    return (
        <Box className={clsx(classes2.sqr_item_area, {
            [classes2.item1]: true,
            [classes2.drawer_item_margins]: hasDrawerParent,
            [classes2.profile_wb_drawer_item]: hasDrawerParent,
        })}>
            <Box className={clsx(classes2.sqr_item_header, {
                [classes2.profile_wb_drawer_item]: hasDrawerParent,
            })}>
                <Typography variant='caption' className={classes2.sqr_item_title}>
                    {resolvePlayerType(color)} Image
                </Typography>
            </Box>
            <Box className={clsx(classes2.sqr_item, {
                [classes2.profile_wb_drawer_item]: hasDrawerParent,
            })}>
                <img
                    src={src}
                    className={classes.piece_img}
                    alt={`${pieceName} (icon of a piece)`}
                />
            </Box>
        </Box>
    );
});

export default ProfileWBAvatar;