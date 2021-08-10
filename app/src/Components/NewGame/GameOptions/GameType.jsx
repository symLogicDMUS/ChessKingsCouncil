import React from "react";
import { motion } from "framer-motion";
import { useStyles } from "./GameType.jss";

export function GameType(props) {
    const { setGameType, gameType, children } = props;
    const classes = useStyles();

    return (
        <motion.div
            className={classes.game_type}
            onClick={() => setGameType(gameType)}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
            {children}
        </motion.div>
    );
}
