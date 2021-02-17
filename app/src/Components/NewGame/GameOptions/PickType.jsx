import React from "react";
import {GameType} from "./GameType";
import Box from "@material-ui/core/Box";
import {useStyles} from "../NewGame.jss";

export function PickType({gameType, setGameType, theme}) {

    const classes = useStyles({theme: theme})

    return (
        <Box className={classes.item}>
            <img src={`/Images/text/new game/subtitles/${theme}/Pick Type.svg`} className={classes.title}/>
            <Box className={classes.game_types}>
                <GameType gameType="Standard" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <div className={classes.game_types_divider} />
                <GameType gameType="Custom" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <div className={classes.game_types_divider} />
                <GameType gameType="Council" setGameType={setGameType} selectedType={gameType} theme={theme}/>
            </Box>
        </Box>
    );
}
