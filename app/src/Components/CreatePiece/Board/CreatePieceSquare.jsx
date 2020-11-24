import React from "react";
import ReactDOM from "react_dom";
import { getOffset } from "../../helpers/getOffset";
import { offsetLabel } from "./RangeLabelComponents/OffsetLabel";
import { SpanLabel } from "./RangeLabelComponents/SpanLabel";
import { getPxPos } from "./pxPos";
import {styles} from "./_CreatePieceSquare.jss";

export function CreatePieceSquare({
    rf,
    className,
    pieceLoc,
    toggleOffset,
    isSpan,
    isOffset,
    showSpanText,
    showOffsetText,
    children,
}) {
    let pxPos = getPxPos(rf);

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
        if (showOffsetText) offsetLabel = offsetLabel(getOffset(rf, pieceLoc));

        return (
            <div className={classes.offset_element} style={pxPos} onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}>
                {offsetLabel}
            </div>
        );
    }

    return (
        <div className={className} style={pxPos} onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}>
            {children}
        </div>
    );
}

export let test = () => ReactDOM.render(<CreatePieceSquare />, document.getElementById("root"));
