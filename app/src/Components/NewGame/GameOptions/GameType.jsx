import React from "react";
import { motion } from "framer-motion";
import { useStyles } from "./GameType.jss";

export function GameType({setGameType, gameType, selectedType, theme}) {
    const classes = useStyles();
    return (
        <motion.img
            className={classes.game_type}
            src={(gameType === selectedType) ? `/Images/GameTypes/hover/${gameType}.svg` : `/Images/GameTypes/normal/${gameType}.svg`}
            onClick={() => setGameType(gameType)}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        />
    );
}