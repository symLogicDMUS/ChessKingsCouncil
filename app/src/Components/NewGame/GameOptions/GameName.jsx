import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {fontSize002} from "../../styles/fontSizes.jss";
import {textFieldGenStyle, textFieldStyle, useStyles} from "../NewGame.jss";
import {innerWidth} from "../../helpers/windowMeasurments";

export function GameName({setGameName, theme}) {
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
                    style={textFieldStyle(fontSize002)}
                    genStyle={textFieldGenStyle}
                />
            </Box>
    );
}
