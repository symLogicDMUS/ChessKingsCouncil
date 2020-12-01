import React from "react";
import ScrollTable from "../../Reuseables/ScrollTable";
import { useStyles } from "./RangeDisplayWindow.jss";
import { fontSizes } from "../../styles/fontSizes";
import { angleToText } from "../../helpers/spanToText";
import { offsetToText } from "../../helpers/offsetToText";

export function RangeDisplayWindow({ spans, offsets }) {
    const classes = useStyles();

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
        <div className={classes.window}>
            <ScrollTable
                top="2em"
                left={0}
                listItems={{ ...getSpanTextLabels(), ...getOffsetTextLabels() }}
                fontSize={fontSizes.medium2}
            />
        </div>
    );
}
