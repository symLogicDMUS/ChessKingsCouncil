import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import {Input, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {fontSize0025} from "../styles/fontSizes.jss";
import {useStyles} from "./SearchBox.jss";

export function SearchBox({ updateSearchText, width, theme, style }) {

    const classes = useStyles({
        theme: theme,
        width: width,
        style: style,
        fontSize: fontSize0025,
    });

    const handleChange = (e) => {
        updateSearchText(e.target.value.toLowerCase())
    };

    return (
        <Box className={classes.search_box}>
            <SearchIcon className={classes.search_icon} />
            <Input
                className={classes.text_field}
                onChange={handleChange}
                disableUnderline
                type="search"
            />
        </Box>
    );
}
