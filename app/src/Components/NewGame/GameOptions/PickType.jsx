import React from "react";
import clsx from "clsx";
import {GameType} from "./GameType";
import Box from "@material-ui/core/Box";
import {useStyles as useMoreStyles} from "../NewGame.jss";
import { useStyles } from "./PickType.jss";

function PickType({gameType, setGameType, theme}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles()

    return (
        <Box className={clsx(classes2.item, {
            [classes.pick_type]: true,
        })}>
            <img src={`/Images/text/new game/Pick Type-${theme}.svg`} className={classes2.title}/>
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

export default PickType;