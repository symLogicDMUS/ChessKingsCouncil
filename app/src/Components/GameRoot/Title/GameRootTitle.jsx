import React from "react";
import {Typography} from "@material-ui/core";
import {StatusBar} from "./StatusBar";
import { useStyles } from "./GameRootTitle.jss";

export function GameRootTitle({turn, winner, condition, theme}) {
    const classes = useStyles({theme});
    return (
        <>
            <Typography className={classes.title}>Play Game</Typography>
            <StatusBar
                turn={turn}
                theme={theme}
                condition={condition}
                winner={winner}
            />
        </>

    );
}