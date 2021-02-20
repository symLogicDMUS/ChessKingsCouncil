import React from "react";
import Box from "@material-ui/core/Box";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {textFieldGenStyle, useStyles} from "../NewGame.jss";

export function GameName({setGameName, onFocus, theme, screenCase}) {
    const classes = useStyles();

    return (
            <Box className={classes.item}>
                <img src={`/Images/text/new game/subtitles/${theme}/Game Name.svg`} className={classes.title} />
                <MuiTextField
                    theme={theme}
                    onFocus={onFocus}
                    onChange={setGameName}
                    id="pick-game-name"
                    label="Pick game name"
                    variant="outlined"
                    size={screenCase === 'mobile' ? 'small' : 'medium'}
                    genStyle={textFieldGenStyle(resolveScreenCase(screenCase))}
                />
            </Box>
    );
}