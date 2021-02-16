import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {fontSize002} from "../../styles/fontSizes.jss";
import {textFieldGenStyle, textFieldStyle, useStyles} from "../NewGame.jss";

export function GameName({setGameName, theme}) {
    const classes = useStyles();

    return (
            <Box className={classes.game_name_container}>
                <Typography className={classes.title} noWrap>
                    Game Name
                    <MuiTextField
                        theme={theme}
                        onChange={setGameName}
                        id={"pick-game-name"}
                        label={"Pick game name"}
                        variant={"outlined"}
                        autoComplete={""}
                        style={textFieldStyle(fontSize002)}
                        genStyle={textFieldGenStyle}
                    />
                </Typography>
            </Box>
    );
}
