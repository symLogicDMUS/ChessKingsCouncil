import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import { ProfileWB } from "./ProfileWB";
import { Close } from "../../Reuseables/Modals/Close";
import { getColorName } from "../../helpers/getColorName";
import {useStyles} from "./ProfileWBModal.jss";

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
        <Box className={classes.profile_wb_modal}>
            <Box className={classes.close_window_row}>
                <Close
                    className={classes.close_icon}
                    onClick={closeProfile}
                    theme={theme}
                />
            </Box>
            <Box className={classes.profile_top}>
                <Typography variant="h6" noWrap className={classes.header}>
                    {getColorName(color)} {pieceName}
                </Typography>
            </Box>
            <Box className={classes.wb_container}>
                <ProfileWB
                    def={def}
                    color={color}
                    theme={theme}
                    pieceName={pieceName}
                    screenCase={screenCase}
                />
            </Box>
        </Box>
    );
}