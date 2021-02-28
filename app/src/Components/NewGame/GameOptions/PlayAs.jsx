import React from "react";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiDropdown} from "../../Reuseables/MuiDropdown";
import {dropdownGenStyle, inputStyle, useStyles} from "../NewGame.jss";

export function PlayAs({setPlayerType, theme, screenCase}) {
    const classes = useStyles();

    return (
        <Box className={classes.item}>
            <img src={`/Images/text/new game/subtitles/${theme}/Play As.svg`} className={classes.title}/>
            <MuiDropdown
                updateParent={setPlayerType}
                variant='outlined'
                theme={theme}
                label='Play As'
                inputLabel='Play As'
                size={(screenCase === 'desktop') ? 'medium' : 'small'}
                style={inputStyle(theme)}
                genStyle={dropdownGenStyle()}
            >
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>,
                <MenuItem value="White">White</MenuItem>,
                <MenuItem value="Black">Black</MenuItem>,
                <MenuItem value="Test">Test</MenuItem>
            </MuiDropdown>
        </Box>
    );
}
