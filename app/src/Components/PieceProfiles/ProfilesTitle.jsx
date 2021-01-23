import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fontSize002} from "../styles/fontSizes.jss";
import {SearchBox} from "../Reuseables/SearchBox";
import {useStyles} from "./ProfilesTitle.jss";

/**
 * For pages without Permanent Drawer
 * */
export function ProfilesTitle({theme, updateSearchText, children}) {
    const classes = useStyles({theme: theme, fontSize: fontSize002});
    return (
        <>
            <Box className={classes.title_bar}>
                <Typography className={classes.title} variant='h6'>{children}</Typography>
                <SearchBox theme={theme} width='10em' updateSearchText={updateSearchText} />
            </Box>
        </>
    );
}