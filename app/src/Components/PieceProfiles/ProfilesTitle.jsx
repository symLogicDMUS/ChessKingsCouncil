import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {SearchBox} from "../Reuseables/SearchBox";
import {useStyles} from "./ProfilesTitle.jss";
import {resolveScreenCase} from "../helpers/resolveScreenCase";

export const widths = {
    desktop: '10.55em',
    mobile: '10.55em',
    ipx: '8.25em',
    ipad: '8.25em',
}

/**
 * For pages without Permanent Drawer
 * */
export function ProfilesTitle({theme, updateSearchText, screenCase, children}) {
    const classes = useStyles({theme: theme});
    return (
        <>
            <Box className={classes.title_bar}>
                <Typography className={classes.title} variant='h6'>{children}</Typography>
                <SearchBox theme={theme} width={widths[resolveScreenCase(screenCase)]} updateSearchText={updateSearchText} />
            </Box>
        </>
    );
}