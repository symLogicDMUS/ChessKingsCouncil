import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";
import {useStyles as useMoreStyles} from "../NewGame.jss";
import { useStyles } from "./PlayAs.jss";

export function PlayAs({setPlayerType, theme, screenCase}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles();

    return (
        <Box className={clsx(classes2.item, {
            [classes.play_as]:true
        })}>
            <img src={`/Images/text/new game/subtitles/${theme}/Play As.svg`} className={classes2.title}/>
            <MuiDropdown
                theme={theme}
                label='Play As'
                variant='outlined'
                inputLabel='Play As'
                updateParent={setPlayerType}
                rootClassName={classes.play_as}
                size={(screenCase === 'desktop') ? 'medium' : 'small'}
            >
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>,
                <MenuItem value="White" classes={classes.player_type}>White</MenuItem>,
                <MenuItem value="Black" classes={classes.player_type}>Black</MenuItem>,
                <MenuItem value="Test" classes={classes.player_type}>Test</MenuItem>
            </MuiDropdown>
        </Box>
    );
}
