import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SearchBox} from "../../Reuseables/UserInput/SearchBox";
import {useStyles} from "./AppBarWithSearch.jss";

export function AppBarWithSearch({open, navDrawerWidth, updateSearchText, theme, children}) {
    const classes = useStyles({theme: theme, navDrawerWidth: navDrawerWidth});
    return (
        <Box className={clsx(classes.app_bar_with_search, {
            [classes.appBarCompressed]: open,
            [classes.appBarRelaxed]: !open,
        })}
        >
            {children}
            <SearchBox theme={theme} updateSearchText={updateSearchText} width='20em'/>
        </Box>
    )
}