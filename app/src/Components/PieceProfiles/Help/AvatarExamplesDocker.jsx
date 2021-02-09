import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {dockerSrcBlue, dockerSrcRed} from "./dockerSrcStr";
import { useStyles } from "./ProfileHelpText.jss";

export function AvatarExamplesDocker({theme}) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.flexbox}>
            <Box className={classes.item}>
                <Typography className={classes.title}>
                    White Image
                </Typography>
                <Box className={classes.window}>
                    <img
                        src={dockerSrcBlue}
                        className={classes.piece_img}
                        alt='Docker (icon of a piece)'
                    />
                </Box>
            </Box>
            <Box className={classes.item}>
                <Typography className={classes.title}>
                    Black Image
                </Typography>
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