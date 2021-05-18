import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {MuiTextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles as useMoreStyles} from "../NewGame.jss";
import { useStyles } from "./GameName.jss";


export function GameName(props) {
    const {gameName, setGameName, theme, ...other} = props;

    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles();

    return (
            <Box className={clsx(classes2.item, {
                [classes.game_name]: true,
            })}>
                <img src={`/Images/text/new game/Game Name-${theme}.svg`} className={classes2.title} />
                <MuiTextField
                    {...other}
                    autoFocus
                    fullWidth={true}
                    value={gameName}
                    variant="outlined"
                    id="pick-game-name"
                    label="Pick game name"
                    onChange={setGameName}
                    className={classes.game_name}
                />
            </Box>
    );
}