import React, {useContext} from "react";
import {Select} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {themesMenuItemList}
        from "../../styles/themes/themeMenuItemList.jss";
import {ThemeContext} from "../../ThemeContext";
import { useStyles } from "./ThemeDropdown.jss";

function ThemeDropdown({theme, pageName, defaultValue}) {
    const {themes, setThemes} = useContext(ThemeContext);
    const classes = useStyles({theme});

    const updateTheme = (e) => {
        const theme = e.target.value;
        if (pageName==='all') {
            setThemes({
                newGame: theme,
                loadGame: theme,
                createPiece: theme,
                customize: theme,
                gameRoot: theme,
                myPieces: theme,
                councilRules: theme,
                home: theme,
            })
        }
        else {
            setThemes({
                ...themes,
                [pageName]: theme,
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