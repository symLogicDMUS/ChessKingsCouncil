import React, {useMemo} from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import { ProfileWB } from "./ProfileWB";
import { Close } from "../../Reuseables/Close";
import { getColorName } from "../../helpers/getColorName";
import {close_icon, useStyles} from "./ProfileWBModal.jss";
import {getRangeBoardImgStr} from "./getRangeBoardImgStr";

export function ProfileWBModal({
    pieceName,
    def,
    color,
    theme,
    screenCase,
    closeProfile,
}) {
    const classes = useStyles({ theme: theme });

    const spanBoardImg = useMemo(() => getRangeBoardImgStr(def.img, 'd4', 'span', def.spans, pieceName, theme), [def])
    const offsetBoardImg = useMemo(() => getRangeBoardImgStr(def.img, 'd4', 'offset', def.offsets, pieceName, theme), [def])

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