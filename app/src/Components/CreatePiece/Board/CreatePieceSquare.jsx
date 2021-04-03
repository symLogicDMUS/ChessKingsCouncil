import React, {memo} from "react";
import clsx from "clsx";
import {sqrSize} from "./CreatePieceBoard.jss";
import {getOffset} from "../../helpers/getOffset";
import {binaryBoard} from "../../helpers/binaryBoard";
import {SpanLabel} from "./RangeLabelComponents/SpanLabel";
import {OffsetLabel} from "./RangeLabelComponents/OffsetLabel";
import {useStyles} from "../../Reuseables/Board/Square.jss";
import {useStyles as useMoreStyles} from "./CreatePieceSquare.jss"

export const CreatePieceSquare = memo(({
    rf,
    theme,
    pieceLoc,
    toggleOffset,
    screenCase,
    isSpan,
    isOffset,
    showSpanText,
    showOffsetText,
    pieceLocHighlight,
    hasToolChild,
    children,
}) => {
    const classes = useStyles({
        rf: rf,
        theme: theme,
        sqrSize: sqrSize[screenCase],
    });
    const classes2 = useMoreStyles({theme: theme});

    const handleClick = () => {
        if (! hasToolChild) {
            toggleOffset(rf, getOffset(rf, pieceLoc))
        }
    };

    return (
        <div
            onClick={handleClick}
            className={clsx(classes2.square, {
                [classes.square]: true,
                [classes.light_normal]: binaryBoard[rf],
                [classes.dark_normal]: ! binaryBoard[rf],
                [classes2.on_hover]: ! hasToolChild,
                [classes.offset]: isOffset,
                [classes.span]: isSpan,
                [classes.piece_loc_highlight]: pieceLocHighlight,
            })}
        >
            {(isSpan && showSpanText && ! hasToolChild) ? (
                <SpanLabel theme={theme}/>
            ) : null}
            {children}
            {(isOffset && showOffsetText && ! hasToolChild ) ? (
                <OffsetLabel
                    theme={theme}
                    offset={getOffset(rf, pieceLoc)}
                />
            ) : null}
        </div>
    );
});