import React, {memo} from "react";
import clsx from "clsx";
import {sqrSize} from "./CreatePieceBoard.jss";
import {getOffset} from "../../helpers/getOffset";
import {binaryBoard} from "../../helpers/binaryBoard";
import {SpanLabel} from "./RangeLabelComponents/SpanLabel";
import {OffsetLabel} from "./RangeLabelComponents/OffsetLabel";
import {useStyles} from "../../Reuseables/Board/Square.jss";
import {pieceLocHover, useStyles as useMoreStyles} from "./CreatePieceSquare.jss";

export const CreatePieceSquare = memo(
    ({
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
         hasFabChild,
         children,
     }) => {
        const classes = useStyles({
            rf: rf,
            theme: theme,
            sqrSize: sqrSize[screenCase],
        });
        const classes2 = useMoreStyles({ theme: theme });

        const handleClick = () => {
            if (!hasToolChild && !isSpan) {
                toggleOffset(rf, getOffset(rf, pieceLoc));
            }
        };

        return (
            <div
                onClick={handleClick}
                className={clsx(classes2.square, {
                    [classes.square]: true,
                    [classes.light_with_hover]: binaryBoard[rf],
                    [classes.dark_with_hover]: !binaryBoard[rf],
                    [classes.span]: isSpan,
                    [classes.offset]: isOffset,
                    [classes.piece_loc_highlight]: pieceLocHighlight,
                })}
                style={rf === pieceLoc ? pieceLocHover(theme) : null}
            >
                {isSpan && showSpanText && !hasToolChild ? (
                    <SpanLabel theme={theme} hasFabChild={hasFabChild} />
                ) : null}
                {isOffset && showOffsetText && !hasToolChild ? (
                    <OffsetLabel
                        offset={getOffset(rf, pieceLoc)}
                        hasFabChild={hasFabChild}
                        theme={theme}
                    />
                ) : null}
                {children}
            </div>
        );
    }
);
