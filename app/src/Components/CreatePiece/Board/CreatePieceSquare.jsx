import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getOffset } from "../../helpers/getOffset";
import { OffsetLabel } from "./RangeLabelComponents/OffsetLabel";
import { SpanLabel } from "./RangeLabelComponents/SpanLabel";
import { largeBoardFontSize as fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "../../Reuseables/Square.jss";
import { themes } from "../../styles/themes.jss";

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
    const classes = useStyles({
        theme: theme,
        fontSize: fontSize,
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            "&:hover": { backgroundColor: themes[theme].sqr_hover },
        },
    });

    if (isSpan) {
        return (
            <div className={classes.span} key={uuidv4()}>
                {showSpanText && <SpanLabel theme={theme} />}
            </div>
        );
    }

    if (isOffset) {
        return (
            <div
                className={classes.offset}
                onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
                key={uuidv4()}
            >
                {showOffsetText && (
                    <OffsetLabel
                        offset={getOffset(rf, pieceLoc)}
                        theme={theme}
                        key={uuidv4()}
                    />
                )}
            </div>
        );
    }

    return (
        <div
            className={isLightSqr ? classes.light_normal : classes.dark_normal}
            onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
            key={uuidv4()}
        >
            {children}
        </div>
    );
}
