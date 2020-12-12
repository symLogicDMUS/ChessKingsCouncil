import React from "react";
import ScrollTable from "../../Reuseables/ScrollTable";
import { useStyles } from "./RangeDisplayWindow.jss";
import { angleToText } from "../../helpers/spanToText";
import { offsetToText } from "../../helpers/offsetToText";
import {fontSize} from "../em.jss";

export function RangeDisplayWindow({ spans, offsets, theme }) {

    const classes = useStyles({theme: theme, fontSize: fontSize})

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
                style={{
                    left: 0,
                    width: '16em'
                }}
                listItems={{ ...getSpanTextLabels(), ...getOffsetTextLabels() }}
                fontSize={fontSize}
                theme={theme}
            />
        </div>
    );
}
