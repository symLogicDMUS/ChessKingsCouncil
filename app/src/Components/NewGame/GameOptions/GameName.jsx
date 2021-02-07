import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {fontSizes, input_style} from "../NewGame.jss";
import {textFieldStyle, useStyles} from "./GameName.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";

export function GameName({setGameName, gameName, theme, screenCase}) {
    const classes = useStyles({text: "Game Name"});

    return (
        <>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title} noWrap>Game Name</Typography>
            </Box>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <MuiTextField
                    theme={theme}
                    value={gameName}
                    onChange={setGameName}
                    id={"pick-game-name"}
                    label={"Pick game name"}
                    variant={"outlined"}
                    autoComplete={""}
                    style={textFieldStyle(fontSizes[resolveScreenCase(screenCase)]*0.2)}
                    genStyle={input_style('Game Name', fontSizes[resolveScreenCase(screenCase)], 'Garamond', theme)}
                />
            </Box>
        </>
    );
}
