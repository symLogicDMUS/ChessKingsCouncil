import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../../helpers/resolvePlayerType";
import { useStyles as useMoreStyles } from "./ProfileWBDrawer.jss";
import { useStyles } from "./ProfileWBAvatarVert.jss";

function ProfileWBAvatarVert({src, pieceName, color, theme}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({theme: theme});

    return (
        <Box className={clsx(classes2.sqr_item_area, {
            [classes2.item1]: true,
        })}>
            <Box className={clsx(classes2.sqr_item_header, {
            })}>
                <Typography variant='caption' className={classes2.sqr_item_title}>
                    {resolvePlayerType(color)} Image
                </Typography>
            </Box>
            <Box className={clsx(classes2.sqr_item, {
            })}>
                <img
                    src={src}
                    className={classes.piece_img}
                    alt={`${pieceName} (icon of a piece)`}
                />
            </Box>
        </Box>
    );
}

export default ProfileWBAvatarVert;