import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {SearchBox} from "../../Reuseables/UserInput/SearchBox";
import { useStyles } from "./AppBarContent.jss";

export function AppBarContent({theme, updateSearchText, children}) {
    const classes = useStyles({theme});
    return (
        <Box className={classes.app_bar_content}>
            <Typography className={classes.title} variant="h6" noWrap>
                {children}
            </Typography>
            <SearchBox theme={theme} updateSearchText={updateSearchText}/>
        </Box>
    )
}