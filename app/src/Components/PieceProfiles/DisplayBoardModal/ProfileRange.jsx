import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./ProfileRange.jss";
import { ProfileRangeHeader } from "./ProfileRangeHeader";
import ProfileRangeBoard from "./ProfileRangeBoard";

export function ProfileRange({
    theme,
    range,
    rangeType,
    color,
    location,
    src,
}) {
    const classes = useStyles({ theme });
    return (
        <Box className={classes.profile_range}>
            <ProfileRangeHeader
                theme={theme}
                color={color}
                rangeType={rangeType}
            />
            <ProfileRangeBoard
                src={src}
                theme={theme}
                range={range}
                rangeType={rangeType}
                location={location}
                isModal={false}
            />
        </Box>
    );
}
