import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Pause, PlayArrow } from "@material-ui/icons";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useStyles } from "./ThemeRotationSm.jss";

export function ThemeRotationSm({
    themes,
    progress,
    paused,
    togglePause,
    themeSubsetNames,
}) {
    const classes = useStyles({theme: themes.home});
    return (
        <Box className={classes.box}>
            <CircularProgress
                variant="determinate"
                value={progress}
                className={classes.spinner}
            />
            <IconButton className={classes.pausePlay} onClick={togglePause}>
                {paused ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Typography className={classes.text}>
                {themeSubsetNames[themes.home]}
            </Typography>
        </Box>
    );
}
