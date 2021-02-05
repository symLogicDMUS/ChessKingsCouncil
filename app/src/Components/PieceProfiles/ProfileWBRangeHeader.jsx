import React, {memo} from "react";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {getColorName} from "../helpers/getColorName";
import {useStyles} from "./ProfileRangeHeader.jss";

export const ProfileWBRangeHeader = memo(({theme, rangeType, color, openRangeModal}) => {
    const classes = useStyles({theme});
    return (
        <Box className={classes.header}>
            <IconButton
                className={classes.expand_widget}
                onClick={openRangeModal}
            >
                <AddIcon
                    className={classes.expand_icon}
                />
            </IconButton>
            <Typography
                className={classes.title}
                noWrap
            >
                {getColorName(color)} {rangeType}
            </Typography>
        </Box>
    );
})