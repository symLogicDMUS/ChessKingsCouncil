import React from "react";
import { ArrowButton } from "./ArrowButton";
import { useStyles } from "./SpanArrowButtons.jss";

export function SpanArrowButtons({ spans, toggleSpan, theme }) {
    const classes = useStyles({theme: theme})

    const angles = ["135d", "90d", "45d", "180d", "0d", "225d", "270d", "315d"];

    const getArrowButtons = () => {
        const arrowButtons = [];
        for (const angle of angles) {
            arrowButtons.push(
                <ArrowButton
                    key={angle}
                    angle={angle}
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
