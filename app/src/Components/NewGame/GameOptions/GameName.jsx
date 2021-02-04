import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {MuiTextField} from "../../Reuseables/MuiTextField";
import {fontSizes, input_style} from "../NewGame.jss";
import {useStyles} from "./GameName.jss";
import {fontSize001725, fontSize0018, fontSize00184, fontSize002} from "../../styles/fontSizes.jss";

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
                    style={{
                        text: {
                            normal: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            hover: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            focused: {
                                fontSize: fontSize0018,
                                height: '1em'

                            },
                        },
                        root: {
                            normal: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            hover: {
                                fontSize: fontSize0018,
                                height: '1em'
                            },
                            focused: {
                                fontSize: fontSize0018,
                                height: '1em'

                            },
                        }
                    }}
                    genStyle={input_style('Game Name', fontSizes[screenCase], 'Garamond', theme)}
                />
            </Box>
        </>
    );
}
