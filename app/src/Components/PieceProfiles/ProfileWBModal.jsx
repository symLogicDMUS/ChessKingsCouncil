import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import { ProfileWB } from "./ProfileWB";
import { Close } from "../Reuseables/Close";
import { getColorName } from "../helpers/getColorName";
import {close_icon, useStyles} from "./ProfileWBModal.jss";

export function ProfileWBModal({
    pieceName,
    def,
    color,
    theme,
    screenCase,
    closeProfile,
}) {
    const classes = useStyles({ theme: theme });

    return (
        <Box className={classes.profile_flexbox}>
            <Box className={classes.profile_top}>
                <Typography variant="h6" className={classes.header}>
                    {getColorName(color)} {pieceName}
                </Typography>
                <Close
                    style={close_icon()}
                    onClick={closeProfile}
                    theme={theme}
                />
            </Box>
            <ProfileWB
                def={def}
                color={color}
                theme={theme}
                pieceName={pieceName}
                screenCase={screenCase}
            />
        </Box>
    );
}