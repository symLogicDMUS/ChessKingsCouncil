import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchBox.jss";

export function SearchBox({
    updateSearchText,
    className,
    iconClassName,
    theme,
    style,
    icon,
    isMenuItem,
}) {
    const classes = useStyles({
        theme: theme,
    });

    const handleChange = (e) => {
        updateSearchText(e.target.value.toLowerCase());
    };

    return (
        <Box
            className={clsx(classes.search, {
                [className]: className,
            })}
            style={style}
        >
            {icon ? (
                icon
            ) : (
                <SearchIcon
                    className={clsx(classes.icon, {
                        [iconClassName]: iconClassName,
                    })}
                />
            )}
            <Input
                onChange={handleChange}
                classes={{
                    root: classes.input_root,
                    input: classes.input,
                }}
                type="search"
                inputProps={{ "aria-label": "search" }}
                disableUnderline={true}
            />
        </Box>
    );
}
