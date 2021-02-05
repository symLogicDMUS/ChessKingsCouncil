import React from "react";
import {angleToText} from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {ArrowButton} from "../Range/SpanArrowButtons/ArrowButton";
import {useStyles, widths, heights, fontSizes} from "./RangeToolExample.jss";

export function RangeToolExample({theme}) {
    const classes = useStyles({theme: theme});
    const spans = [
        "90d",
        "45d",
        "0d",
        "315d",
        "270d",
        "225d",
        "180d",
        "135d",
    ];

    const getSpanTextLabels = () => {
        const newSpans = [];
        for (const angle of spans) {
            newSpans.push(angleToText[angle]);
        }
        return newSpans;
    };

    /*
    The ArrowButton component needs
    a function that takes a single
    argument to not crash, but we
    aren't using it here.
    */
    const doNothing = (span) => {
        return null;
    };

    return (
        <div className={classes.range_tool}>
            <ScrollTable
                numRows={5}
                theme={theme}
                style={{
                    width: widths.desktop,
                    height: heights.desktop,
                    fontSize: fontSizes.desktop,
                }}
                buttonStyle={{borderRadius: 0}}
                listItems={getSpanTextLabels()}
            />
            <div className={classes.span_arrow_buttons}>
                {spans.map(angle =>
                    <ArrowButton
                        key={angle}
                        angle={angle}
                        isActive={true}
                        theme={theme}
                        toggleSpan={doNothing}
                    />
                )}
            </div>
        </div>
    )
}