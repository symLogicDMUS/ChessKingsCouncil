import React, {memo, useEffect} from "react";
import Box from "@material-ui/core/Box";
import { ProfileRangeHeader } from "../ProfileRangeHeader";
import { useStyles } from "./ProfileWBRange.jss";

export const ProfileWBRange = ({
    src,
    theme,
    color,
    rangeType,
    openRangeModal,
}) => {
    const classes = useStyles({ theme });
    return (
        <Box className={classes.profile_wb_range}>
            <ProfileRangeHeader
                theme={theme}
                color={color}
                rangeType={rangeType}
                openRangeModal={openRangeModal}
            />
            <img src={src} className={classes.board_img} alt='range of piece shown as board' />
        </Box>
    );
}