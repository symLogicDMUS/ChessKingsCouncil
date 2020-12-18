import React from "react";
import {GameType} from "./GameType";
import {Typography} from "@material-ui/core";
import {fontSize} from "../../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import {useStyles} from "./PickType.jss";

export function PickType({gameType, setGameType, theme}) {

    const classes = useStyles({fontSize: fontSize * 6, theme: theme})

    return (
        <>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
            >
                <Typography className={classes.title}>Pick Type</Typography>
            </Box>
            <Box width='100%'
                 display='flex'
                 flexDirection='row'
                 justifyContent='center'
                 className={classes.game_types}
            >
                <GameType gameType="Standard" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <GameType gameType="Custom" setGameType={setGameType} selectedType={gameType} theme={theme}/>
                <GameType gameType="Council" setGameType={setGameType} selectedType={gameType} theme={theme}/>
            </Box>
        </>
    );
}
