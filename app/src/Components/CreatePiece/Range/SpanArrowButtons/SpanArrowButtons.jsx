import React from "react";
import { ArrowButton } from "./ArrowButton";
import { useStyles } from "./SpanArrowButtons.jss";

export function SpanArrowButtons({ spans, toggleSpan, theme }) {
    const classes = useStyles();

    const angles = ["135d", "90d", "45d", "180d", "0d", "225d", "270d", "315d"];
    const vectors = {
        "135d": "upLeft.svg",
        "90d": "up.svg",
        "45d": "upRight.svg",
        "180d": "left.svg",
        "0d": "right.svg",
        "225d": "downLeft.svg",
        "270d": "down.svg",
        "315d": "downRight.svg",
    };

    const getArrowButtons = () => {
        const arrowButtons = [];
        for (const angle of angles) {
            arrowButtons.push(
                <ArrowButton
                    id={angle}
                    pos={angle}
                    image={vectors[angle]}
                    isActive={spans[angle]}
                    toggleSpan={toggleSpan}
                    theme={theme}
                />
            );
        }
        return arrowButtons;
    };

    return <div className={classes.span_arrow_buttons}>{getArrowButtons()}</div>;
}
