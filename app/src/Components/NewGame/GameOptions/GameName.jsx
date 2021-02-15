import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {textFieldGenStyle, textFieldStyle, useStyles} from "../NewGame.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function GameName({setGameName, theme}) {
    const classes = useStyles();

    return (
        <div className={classes.item} >
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
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
        </div>
    );
}
