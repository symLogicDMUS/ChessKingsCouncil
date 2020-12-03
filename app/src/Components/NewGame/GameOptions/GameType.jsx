import React, {useState} from "react";
import { motion } from "framer-motion";

export function GameType({className, setGameType, gameType, selectedType}) {
    //let [hover, setHover] = useState(false);
    return (
        <motion.img
            className={className}
            src={(gameType === selectedType) ? `/Images/GameTypes/hover/${gameType}.svg` : `/Images/GameTypes/normal/${gameType}.svg`}
            onClick={() => setGameType(gameType)}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
        />
    );
}
