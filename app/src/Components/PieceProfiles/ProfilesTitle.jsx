import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fontSize002} from "../styles/fontSizes.jss";
import {SearchBox} from "../Reuseables/SearchBox";
import {useStyles} from "./ProfilesTitle.jss";

export const widths = {
    desktop: '10.55em',
    mobile: '11.55em'
}

/**
 * For pages without Permanent Drawer
 * */
export function ProfilesTitle({theme, updateSearchText, screenCase, children}) {
    const classes = useStyles({theme: theme, fontSize: fontSize002});
    return (
        <>
            <Box className={classes.title_bar}>
                <Typography className={classes.title} variant='h6'>{children}</Typography>
                <SearchBox theme={theme} width={widths[screenCase]} updateSearchText={updateSearchText} />
            </Box>
        </>
    );
}