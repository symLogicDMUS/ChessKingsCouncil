import React from "react";
import {SpanArrowButtons} from "./SpanArrowButtons/SpanArrowButtons";
import {fontSize} from "../fontSize.jss";
import {Typography} from "@material-ui/core";
import {angleToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import ScrollTable from "../../Reuseables/ScrollTable";
import {useStyles} from "./Range.jss"
import Box from "@material-ui/core/Box";

export function getPangram() {
    const sentences = []
    for (let index = 0; index < 7; index++) {
        sentences.push("The quick brown fox jumps over the lazy dog.")
    }
    return sentences;
}

export function Range({spans, offsets, toggleSpan, theme}) {

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
        <>
            <div className={classes.range_tool}>
                <Box className={classes.box}>
                    <Typography className={classes.title}>Range</Typography>
                    <ScrollTable
                        // listItems={{ ...getSpanTextLabels(), ...getOffsetTextLabels() }}
                        listItems={getPangram()}
                        width='9em'
                        fontSize={fontSize}
                        theme={theme}
                        isBorder={true}
                        style={{borderRadius: '0.175em'}}
                    />
                    <SpanArrowButtons spans={spans} toggleSpan={toggleSpan} theme={theme}/>
                </Box>
            </div>
        </>
    );
}