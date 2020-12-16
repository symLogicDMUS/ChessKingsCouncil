import React from "react";
import { getOffset } from "../../helpers/getOffset";
import { OffsetLabel } from "./RangeLabelComponents/OffsetLabel";
import { SpanLabel } from "./RangeLabelComponents/SpanLabel";
import { getPxPos } from "./pxPos";
import {fontSize} from "../fontSize.jss";
import { useStyles } from "./CreatePieceSquare.jss";

export function CreatePieceSquare({
    rf,
    pieceLoc,
    toggleOffset,
    isSpan,
    isOffset,
    isLightSqr,
    showSpanText,
    showOffsetText,
    children,
}) {
    let pxPos = getPxPos(rf);

    const classes = useStyles({fontSize});

    if (isSpan) {
        let spanLabel = null;
        if (showSpanText) spanLabel = SpanLabel();

        return (
            <div className={classes.span_element} style={pxPos}>
                {spanLabel}
            </div>
        );
    }

    if (isOffset) {
        let offsetLabel = null;
        if (showOffsetText) offsetLabel = OffsetLabel(getOffset(rf, pieceLoc));

        return (
            <div
                className={classes.offset_element}
                style={pxPos}
                onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
            >
                {offsetLabel}
            </div>
        );
    }

    return (
        <div
            className={isLightSqr ? classes.light_sqr : classes.dark_sqr}
            style={pxPos}
            onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
        >
            {children}
        </div>
    );
}
