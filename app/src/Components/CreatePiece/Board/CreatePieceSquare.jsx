import React from "react";
import { getOffset } from "../../helpers/getOffset";
import { OffsetLabel } from "./RangeLabelComponents/OffsetLabel";
import { SpanLabel } from "./RangeLabelComponents/SpanLabel";
import {fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "../../Reuseables/Square.jss";

export function CreatePieceSquare({
    rf,
    theme,
    pieceLoc,
    toggleOffset,
    isSpan,
    isOffset,
    isLightSqr,
    showSpanText,
    showOffsetText,
    children,
}) {

    const classes = useStyles({ fontSize, theme});

    if (isSpan) {
        let spanLabel = null;
        if (showSpanText) spanLabel = SpanLabel();

        return (
            <div className={classes.span_element}>
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
                onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
            >
                {offsetLabel}
            </div>
        );
    }

    return (
        <div
            className={isLightSqr ? classes.light_sqr : classes.dark_sqr}
            onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
        >
            {children}
        </div>
    );
}
