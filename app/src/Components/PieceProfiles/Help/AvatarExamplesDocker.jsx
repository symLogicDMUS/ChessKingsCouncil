import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {dockerSrcBlue, dockerSrcRed} from "./dockerSrcStr";
import { useStyles } from "./ProfileHelpText.jss";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";

export function AvatarExamplesDocker({theme}) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.flexbox}>
            <Box className={classes.item}>
                <Box className={classes.header}>
                    <Typography className={classes.avatar_title}>
                        White Image
                    </Typography>
                </Box>
                <Box className={classes.window}>
                    <img
                        src={dockerSrcBlue}
                        className={classes.piece_img}
                        alt='Docker (icon of a piece)'
                    />
                </Box>
            </Box>
            <Box className={classes.item}>
                <Box className={classes.header}>
                    <Typography className={classes.avatar_title}>
                        Black Image
                    </Typography>
                </Box>
                <Box className={classes.window}>
                    <img
                        src={dockerSrcRed}
                        className={classes.piece_img}
                        alt='Docker (icon of a piece)'
                    />
                </Box>
            </Box>
        </div>
    )
}