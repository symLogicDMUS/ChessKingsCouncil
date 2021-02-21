import React from "react";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {Dropdown} from "../../Reuseables/Dropdown";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {dropdownGenStyle, useStyles} from "../NewGame.jss";

export function PlayAs({setPlayerType, theme, onFocus, screenCase, children}) {
    const classes = useStyles();

    return (
        <Box className={classes.item}>
            <img src={`/Images/text/new game/subtitles/${theme}/Play As.svg`} className={classes.title}/>
            <Dropdown
                updateParent={setPlayerType}
                list={[
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>,
                    <MenuItem value="White">White</MenuItem>,
                    <MenuItem value="Black">Black</MenuItem>,
                    <MenuItem value="Test">Test</MenuItem>,
                ]}
                overwrite={null}
                variant='outlined'
                theme={theme}
                label='Play As'
                inputLabel='Play As'
                onFocus={onFocus}
                size={screenCase === 'desktop' ? 'medium' : 'small'}
                genStyle={dropdownGenStyle(resolveScreenCase(screenCase))}
            />
            {children}
        </Box>
    );
}
