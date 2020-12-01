import React from "react";
import {RangeDisplayWindow} from "./RangeDisplayWindow";
import {SpanArrowButtons} from "./SpanArrowButtons/SpanArrowButtons";
import {useStyles} from "./Range.jss"



export function Range({spans, offsets, toggleSpan, theme}) {

    const classes = useStyles()

    return (
        <>
            <div className={classes.range_tool}>
                <div className={classes.title}>Range</div>
                <RangeDisplayWindow spans={spans} offsets={offsets} theme={theme} />
                <SpanArrowButtons spans={spans} toggleSpan={toggleSpan} theme={theme}/>
            </div>
        </>
    );
}