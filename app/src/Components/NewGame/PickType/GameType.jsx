import React, { useState } from "react";
import { Link } from "react-router-dom";

export function GameType({ className, setType, gameType }) {
    let [hover, setHover] = useState(false);
    return (
        <Link>
            <img
                className={className}
                src={hover ? `/Images/GameTypes/hover/${gameType}.svg` : `/Images/GameTypes/normal/${gameType}.svg`}
                onClick={() => setType(gameType)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </Link>
    );
}
