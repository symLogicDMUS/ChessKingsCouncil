import React from "react";
import { ArrowButton } from "./ArrowButton";
import { useStyles } from "./SpanArrowButtons.jss";

export function SpanArrowButtons({ spans, toggleSpan, screenCase, theme, toggleMiniVariantTool }) {
    const classes = useStyles({theme: theme})

    const getArrowButtons = (angles) => {
        const arrowButtons = [];
        for (const angle of angles) {
            arrowButtons.push(
                <ArrowButton
                    key={angle}
                    angle={angle}
                    isActive={spans[angle]}
                    toggleSpan={toggleSpan}
                    screenCase={screenCase}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                    theme={theme}
                />
            );
        }
        return arrowButtons;
    };

    return (
        <div className={classes.span_arrow_buttons}>
            <div className={classes.row}>{getArrowButtons(["135d", "90d", "45d"])}</div>
            <div className={classes.row}>{getArrowButtons(["180d", "mid", "0d"])}</div>
            <div className={classes.row}>{getArrowButtons(["225d", "270d", "315d"])}</div>
        </div>
    );
}
