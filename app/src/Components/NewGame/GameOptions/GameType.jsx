import React, {useState} from "react";


export function GameType({className, setGameType, gameType, fontSize}) {
    let [hover, setHover] = useState(false);
    return (
        <img
            className={className}
            src={hover ? `/Images/GameTypes/hover/${gameType}.svg` : `/Images/GameTypes/normal/${gameType}.svg`}
            onClick={() => setGameType(gameType)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
    );
}
