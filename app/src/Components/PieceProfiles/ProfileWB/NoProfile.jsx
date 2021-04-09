import React, {memo} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./NoProfile.jss";

export const NoProfile = memo(({pieceName, imgUrl, theme}) => {
    const classes = useStyles({theme: theme});
    return (
        <Box className={classes.no_profile}>
            <Typography variant='h6'  className={classes.caption}>
                No profile for {pieceName}
            </Typography>
            <img src={imgUrl} className={classes.inline_piece}/>
        </Box>
    );
});