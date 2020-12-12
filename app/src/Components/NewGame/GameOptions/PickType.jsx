import React from "react";
import {GameType} from "./GameType";
import {Typography} from "@material-ui/core";
import {useStyles} from "./PickType.jss";

export function PickType({gameType, setGameType, fontSize, theme}) {

    const classes = useStyles({fontSize: fontSize, text: 'Pick Type'})

    return (
        <>
            <Typography className={classes.title}>Pick Type</Typography>
            <GameType className={classes.standard} setGameType={setGameType} gameType="Standard" selectedType={gameType}/>
            <GameType className={classes.custom} setGameType={setGameType} gameType="Custom" selectedType={gameType}/>
            <GameType className={classes.council} setGameType={setGameType} gameType="Council" selectedType={gameType}/>
        </>
    );
}
