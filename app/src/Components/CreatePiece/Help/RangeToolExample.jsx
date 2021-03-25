import React from "react";
import MediaQuery from "react-responsive/src";
import {angleToText} from "../../helpers/spanToText";
import {ArrowButtonExample} from "./ArrowButtomExample";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
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

    return (
        <div className={classes.range_tool}>
            <MediaQuery minWidth={960}>
                <ScrollTable
                    listItems={getSpanTextLabels()}
                    numRows={5}
                    theme={theme}
                    width={widths.desktop}
                    fontSize={fontSizes.desktop}
                    buttonStyle={{borderRadius: 0}}
                />
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <ScrollTable
                    listItems={getSpanTextLabels()}
                    numRows={5}
                    theme={theme}
                    width={widths.mobile}
                    fontSize={fontSizes.mobile}
                    buttonStyle={{borderRadius: 0}}
                />
            </MediaQuery>
            <div className={classes.span_arrow_buttons}>
                {spans.map(angle =>
                    <ArrowButtonExample
                        key={angle}
                        angle={angle}
                        theme={theme}
                    />
                )}
            </div>
        </div>
    )
}