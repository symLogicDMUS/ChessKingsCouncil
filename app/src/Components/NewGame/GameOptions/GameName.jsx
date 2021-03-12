import React from "react";
import Box from "@material-ui/core/Box";
import {MuiTextField} from "../../Reuseables/UserInput/MuiTextField";
import {inputStyle, useStyles} from "../NewGame.jss";

export function GameName({setGameName, theme, screenCase}) {
    const classes = useStyles();

    return (
            <Box className={classes.item}>
                <img src={`/Images/text/new game/subtitles/${theme}/Game Name.svg`} className={classes.title} />
                <MuiTextField
                    theme={theme}
                    onChange={setGameName}
                    id="pick-game-name"
                    label="Pick game name"
                    variant="outlined"
                    fullWidth={true}
                    size={(screenCase === 'desktop') ? 'medium' : 'small'}
                    style={inputStyle(theme)}
                />
            </Box>
    );
}