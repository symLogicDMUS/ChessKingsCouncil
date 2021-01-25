import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { MuiTextField } from "../../Reuseables/MuiTextField";
import { useStyles} from "./GameName.jss";
import {fontSizes, input_style} from "../NewGame.jss";

export function GameName({ setGameName, gameName, theme, screenCase }) {
    const classes = useStyles({ text: "Game Name" });

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
                    value={gameName}
                    onChange={setGameName}
                    autoComplete={""}
                    theme={theme}
                    style={input_style('Game Name', fontSizes[screenCase], 'Garamond', theme)}
                    id={"pick-game-name"}
                    label={"Pick game name"}
                    variant={"outlined"}
                />
            </Box>
        </>
    );
}
