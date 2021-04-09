import React, {memo, useState} from "react";
import clsx from "clsx";
import {sqrSize} from "./CreatePieceBoard.jss";
import {getOffset} from "../../helpers/getOffset";
import {binaryBoard} from "../../helpers/binaryBoard";
import {SpanLabel} from "./RangeLabelComponents/SpanLabel";
import {OffsetLabel} from "./RangeLabelComponents/OffsetLabel";
import {useStyles as useMoreStyles} from "../../Reuseables/Board/Square.jss";
import {pieceLocHover, useStyles} from "./CreatePieceSquare.jss";
import Button from "@material-ui/core/Button";

export const CreatePieceSquare = memo(
    ({
         rf,
         theme,
         pieceLoc,
         toggleOffset,
         isSpan,
         isOffset,
         showSpanText,
         showOffsetText,
         hasToolChild,
         hasFabChild,
         children,
     }) => {
        const [hover, setHover] = useState(false);
        const classes = useStyles({ theme: theme, rf: rf });
        const classes2 = useMoreStyles({rf: rf, theme: theme});

        const handleClick = () => {
            if (!hasToolChild && !isSpan) {
                toggleOffset(rf, getOffset(rf, pieceLoc));
            }
        };

        return (
            <Button
                onClick={handleClick}
                className={clsx(classes.square, {
                    [classes2.light_with_hover]: binaryBoard[rf],
                    [classes2.dark_with_hover]: !binaryBoard[rf],
                    [classes2.offset]: isOffset,
                })}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={rf === pieceLoc && hover ? pieceLocHover(theme) : null}
                disableRipple={hasToolChild}
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
            </Button>
        );
    }
);
