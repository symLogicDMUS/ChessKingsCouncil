import React from "react";
import {GameType} from "./GameType";
import {Typography} from "@material-ui/core";
import {useStyles} from "./PickType.jss";

export function PickType({setGameType, fontSize}) {

    const classes = useStyles({fontSize: fontSize, text: 'Pick Type'})

    return (
        <>
            <Typography className={classes.title}>Pick Type</Typography>
            <GameType className={classes.standard} setGameType={setGameType} gameType="Standard"/>
            <GameType className={classes.custom} setGameType={setGameType} gameType="Custom"/>
            <GameType className={classes.council} setGameType={setGameType} gameType="Council"/>
        </>
    );
}
