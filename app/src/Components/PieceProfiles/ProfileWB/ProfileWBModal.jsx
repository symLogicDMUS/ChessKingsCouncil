import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {Close} from "../../Reuseables/Modals/Close";
import {getColorName} from "../../helpers/getColorName";
import ProfileWBAvatar from "./ProfileWBAvatar";
import ProfileWBRange from "./ProfileWBRange";
import {useStyles as useMoreStyles} from "./ProfileWB.jss";
import {boardGridAdjust, useStyles} from "./ProfileWBModal.jss";

export function ProfileWBModal({
    pieceName,
    imgUrl,
    def,
    color,
    theme,
    screenCase,
    closeProfile,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({theme})
    return (
        <Box className={classes.profile_wb_modal}>
            <Box className={classes.close_window_row}>
                <Close
                    className={classes.close_icon}
                    onClick={closeProfile}
                    theme={theme}
                />
            </Box>
            <Box className={classes.top_area}>
                <Typography variant="h6" noWrap className={classes.header}>
                    {getColorName(color)} {pieceName}
                </Typography>
            </Box>
            <Box className={classes.wb_container}>
                <div className={clsx(classes2.profile_wb, {
                    [classes2.profile_w]: color === 'W',
                    [classes2.profile_b]: color === 'B',
                })}>
                    <ProfileWBAvatar
                        src={imgUrl}
                        color={color}
                        theme={theme}
                        pieceName={pieceName}
                    />
                    <ProfileWBRange
                        pieceName={pieceName}
                        pieceImgUrl={imgUrl}
                        range={def.spans}
                        rangeType='span'
                        color={color}
                        theme={theme}
                        screenCase={screenCase}
                        boardGridStyle={boardGridAdjust}
                    />
                    <ProfileWBRange
                        pieceName={pieceName}
                        pieceImgUrl={imgUrl}
                        range={def.offsets}
                        rangeType='offset'
                        color={color}
                        theme={theme}
                        screenCase={screenCase}
                        boardGridStyle={boardGridAdjust}
                    />
                </div>
            </Box>
        </Box>
    );
}