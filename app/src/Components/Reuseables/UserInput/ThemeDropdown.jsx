import React, {useContext} from "react";
import {Select} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {themesMenuItemList}
        from "../../styles/themes/themeMenuItemList.jss";
import {ThemeContext} from "../../../Context/ThemeContext";
import { useStyles } from "./ThemeDropdown.jss";

function ThemeDropdown({theme, pageName, defaultValue}) {
    const {themes, themeDispatch} = useContext(ThemeContext);
    const classes = useStyles({theme});

    const updateTheme = (e) => {
        const theme = e.target.value;
        if (pageName==='all') {
            themeDispatch({
                type: 'set-unified-theme',
                theme: theme,
            })
        }
        else {
            themeDispatch({
                type: 'update-theme',
                pageName: pageName,
                theme: theme,
            })
        }
    };

    return (
        <Box className={classes.select_theme}>
            <Select
                theme={theme}
                fullWidth={true}
                variant={'outlined'}
                onChange={updateTheme}
                className={classes.select_theme}
                defaultValue={defaultValue}
            >
                {themesMenuItemList}
            </Select>
        </Box>
    );
}

export default ThemeDropdown;