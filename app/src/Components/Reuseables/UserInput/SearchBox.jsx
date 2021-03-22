import React from "react";
import Box from "@material-ui/core/Box";
import {Input} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useStyles} from "./SearchBox.jss";
import clsx from "clsx";

export function SearchBox({updateSearchText, width, classProp, theme,}) {

    const classes = useStyles({
        theme: theme,
        width: width,
    });

    const handleChange = (e) => {
        updateSearchText(e.target.value.toLowerCase())
    };

    return (
        <Box className={
            clsx(classes.search_box, {
                [classProp]: classProp,
            })}
        >
            <SearchIcon className={classes.search_icon}/>
            <Input
                className={classes.text_field}
                onChange={handleChange}
                disableUnderline
                type="search"
            />
        </Box>
    );
}
