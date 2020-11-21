import React from "react";
import ReactDOM from "react-dom";
import { getOffset } from "../../helpers/getOffset";
import { getOffsetLabel } from "./RangeLabelComponents/getOffsetLabel";
import { getSpanLabel } from "./RangeLabelComponents/getSpanLabel";
import { getPxPos } from "./pxPos";
import "./_CreatePieceSquare.scss";

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
        if (showSpanText) spanLabel = getSpanLabel();

        return (
            <div className="span-element" style={pxPos}>
                {spanLabel}
            </div>
        );
    }

    if (isOffset) {
        let offsetLabel = null;
        if (showOffsetText) offsetLabel = getOffsetLabel(getOffset(rf, pieceLoc));

        return (
            <div className="offset-element" style={pxPos} onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}>
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
