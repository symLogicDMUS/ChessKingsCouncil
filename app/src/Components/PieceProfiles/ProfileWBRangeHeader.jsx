import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {getColorName} from "../helpers/getColorName";
import {useStyles as useMoreStyles} from "./ProfileWB/ProfileWB.jss";
import {styleOverride, useStyles} from "./ProfileWBRangeHeader.jss";

export const ProfileWBRangeHeader = memo(({theme, rangeType, color, openRangeModal, hasDrawerParent}) => {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme});

    return (
        <Box
            className={clsx(classes2.sqr_item_header, {
                [classes2.profile_wb_drawer_item] : hasDrawerParent,
        })}
            style={styleOverride}
        >
            <IconButton
                className={clsx(classes.expand_button, {
                    [classes2.profile_wb_drawer_item] : hasDrawerParent,
                })}
                onClick={openRangeModal}
            >
                <AddIcon
                    className={classes.expand_icon}
                />
            </IconButton>
            <Typography
                className={clsx(classes2.sqr_item_title, {
                    [classes.range_title]: true,
                    [classes2.profile_wb_drawer_item] : hasDrawerParent,
                })}
                variant='caption'
                noWrap
            >
                {getColorName(color)} {rangeType}
            </Typography>
        </Box>
    );
})