import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {MuiTextField} from "../../Reuseables/UserInput/MuiTextField";
import { useStyles as useEvenMoreStyles } from "../Input.jss";
import {useStyles as useMoreStyles} from "../NewGame.jss";
import { useStyles } from "./GameName.jss";


export function GameName({setGameName, theme, screenCase}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles();

    return (
            <Box className={clsx(classes2.item, {
                [classes.game_name]:true,
            })}>
                <img src={`/Images/text/new game/subtitles/${theme}/Game Name.svg`} className={classes2.title} />
                <MuiTextField
                    rootClassName={classes.game_name}
                    onChange={setGameName}
                    id="pick-game-name"
                    label="Pick game name"
                    variant="outlined"
                    fullWidth={true}
                    size={(screenCase === 'desktop') ? 'medium' : 'small'}
                    root
                />
            </Box>
    );
}