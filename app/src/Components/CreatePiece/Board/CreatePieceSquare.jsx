import React from "react";
import clsx from "clsx";
import {themes} from "../../styles/themes.jss";
import {sqrSize} from "./CreatePieceBoard.jss";
import {getOffset} from "../../helpers/getOffset";
import {OffsetLabel} from "./RangeLabelComponents/OffsetLabel";
import {SpanLabel} from "./RangeLabelComponents/SpanLabel";
import {useStyles as useMoreStyles} from "./CreatePieceSquare.jss"
import {useStyles} from "../../Reuseables/Board/Square.jss";

export function CreatePieceSquare({
    rf,
    theme,
    pieceLoc,
    toggleOffset,
    screenCase,
    isSpan,
    isOffset,
    isLightSqr,
    showSpanText,
    showOffsetText,
    children,
}) {
    const classes = useStyles({
        rf: rf,
        theme: theme,
        sqrSize: sqrSize[screenCase],
    });
    const classes2 = useMoreStyles({theme: theme});

    return (
        <div
            onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
            className={clsx(classes2.square, {
                [classes.square]: true,
                [classes.light_normal]: isLightSqr,
                [classes.dark_normal]: ! isLightSqr,
                [classes.offset]: isOffset,
                [classes.span]: isSpan,
            })}
            key={rf}
        >
            {(isSpan && showSpanText) ? (
                <SpanLabel theme={theme}/>
            ) : null}
            {children}
            {(isOffset && ! isSpan && showOffsetText) ? (
                <OffsetLabel
                    offset={getOffset(rf, pieceLoc)}
                    theme={theme}
                />
            ) : null}
        </div>
    );
}