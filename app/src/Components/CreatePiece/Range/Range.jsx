import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {angleToText} from "../../helpers/spanToText";
import {SpanArrowButtons} from "./SpanArrowButtons/SpanArrowButtons";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {offsetToText} from "../../helpers/offsetToText";
import {widths, heights, fontSizes, useStyles} from "./Range.jss";

export function Range({ spans, offsets, toggleSpan, theme, styles, screenCase }) {
    const classes = useStyles({ theme: theme, styles: styles });

    const getSpanTextLabels = () => {
        const newSpans = [];
        for (const angle of Object.keys(spans)) {
            if (spans[angle]) {
                newSpans.push(angleToText[angle]);
            }
        }
        return newSpans;
    };

    const getOffsetTextLabels = () => {
        return offsets.map((offset) => offsetToText(offset));
    };

    return (
        <>
            <div className={classes.range_tool}>
                <Box className={classes.box}>
                    <MediaQuery minAspectRatio={'1001/1000'}>
                        <Typography className={classes.title}>Range</Typography>
                    </MediaQuery>
                    <ScrollTable
                        numRows={5}
                        theme={theme}
                        style={{
                            width: widths[screenCase],
                            height: heights[screenCase],
                            fontSize: fontSizes[screenCase],
                        }}
                        buttonStyle={{borderRadius: 0}}
                        listItems={[...getSpanTextLabels(), ...getOffsetTextLabels()]}
                    />
                    <SpanArrowButtons
                        spans={spans}
                        toggleSpan={toggleSpan}
                        theme={theme}
                    />
                </Box>
            </div>
        </>
    );
}
