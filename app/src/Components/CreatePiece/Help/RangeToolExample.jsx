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
            <MediaQuery minDeviceWidth={768}>
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
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <ScrollTable
                    numRows={5}
                    theme={theme}
                    style={{
                        width: widths.mobile,
                        height: heights.mobile,
                        fontSize: fontSizes.mobile,
                    }}
                    buttonStyle={{borderRadius: 0}}
                    listItems={getSpanTextLabels()}
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