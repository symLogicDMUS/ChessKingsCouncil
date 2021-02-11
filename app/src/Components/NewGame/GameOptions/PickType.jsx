import React from "react";
import {GameType} from "./GameType";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {fontSize012} from "../../styles/fontSizes.jss";
import {useStyles} from "../NewGame.jss";

export function PickType({gameType, setGameType, theme}) {

    const classes = useStyles({theme: theme})

    return (
        <div className={classes.item}>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title}>Pick Type</Typography>
            </Box>
            <Box display='flex'
                 flexDirection='row'
                 justifyContent='center'
                 className={classes.game_types}
            >
                <GameType gameType="Standard" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <GameType gameType="Custom" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <GameType gameType="Council" setGameType={setGameType} selectedType={gameType} theme={theme}/>
            </Box>
        </div>
    );
}
