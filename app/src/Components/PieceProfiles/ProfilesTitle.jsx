import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {useStyles} from "./ProfilesTitle.jss";

export function ProfilesTitle({theme, updateSearchText, children}) {
    const classes = useStyles({theme: theme});
    return (
        <>
            <Box className={classes.title_bar}>
                <Typography className={classes.title} variant='h6'>{children}</Typography>
                <SearchBox theme={theme} className={classes.search} iconClassName={classes.icon} updateSearchText={updateSearchText} />
            </Box>
        </>
    );
}