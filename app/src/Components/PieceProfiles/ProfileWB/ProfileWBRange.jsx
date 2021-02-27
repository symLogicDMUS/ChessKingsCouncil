import React, {memo, useEffect} from "react";
import Box from "@material-ui/core/Box";
import { ProfileWBRangeHeader } from "../ProfileWBRangeHeader";
import { useStyles } from "./ProfileWBRange.jss";

export const ProfileWBRange = ({
    src,
    theme,
    color,
    rangeType,
    openRangeModal,
    hasDrawerParent,
}) => {
    const classes = useStyles({ theme: theme, hasDrawerParent: hasDrawerParent });
    return (
        <Box className={classes.profile_wb_range}>
            <ProfileWBRangeHeader
                theme={theme}
                color={color}
                rangeType={rangeType}
                openRangeModal={openRangeModal}
                hasDrawerParent={hasDrawerParent}
            />
            <Box className={classes.board_window}>
                <img src={src} className={classes.board_img} alt='range of piece shown as board' />
            </Box>
        </Box>
    );
}