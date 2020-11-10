import React from "react";
import "./ScrollArrow.scss";

export function ScrollArrow({ direction, move }) {
    return (
        <div className={`create-piece-scroll-${direction}`}>
            <img
                src={`/Images/arrows/${direction}-arrow.svg`}
                className={`create-piece-scroll-arrow-${direction}`}
                onClick={move}
            />
        </div>
    );
}
