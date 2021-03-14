import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {angleToText} from "../../helpers/spanToText";
import {SpanArrowButtons} from "./SpanArrowButtons/SpanArrowButtons";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {offsetToText} from "../../helpers/offsetToText";
import {scroll_table_style, useStyles} from "./Range.jss";

export function Range({spans, offsets, toggleSpan, theme, styles, screenCase}) {
    const classes = useStyles({theme: theme, styles: styles});

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
        <Box className={classes.range_tool}>
            <MediaQuery minDeviceWidth={1040}>
                <Typography className={classes.title}>Range</Typography>
            </MediaQuery>
            <ScrollTable
                listItems={[...getSpanTextLabels(), ...getOffsetTextLabels()]}
                numRows={5}
                theme={theme}
                style={scroll_table_style()}
                buttonStyle={{borderRadius: 0}}
            />
            <div className={classes.divider} />
            <SpanArrowButtons
                spans={spans}
                toggleSpan={toggleSpan}
                theme={theme}
            />
        </Box>
    );
}
