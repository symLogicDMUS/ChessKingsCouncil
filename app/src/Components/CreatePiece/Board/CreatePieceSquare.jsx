import React from "react";
import {v4 as uuidv4} from "uuid";
import {getOffset} from "../../helpers/getOffset";
import {OffsetLabel} from "./RangeLabelComponents/OffsetLabel";
import {SpanLabel} from "./RangeLabelComponents/SpanLabel";
import {getBoardFontSize} from "./CreatePieceBoard.jss";
import {fontSize0095} from "../../styles/fontSizes.jss";
import {useStyles} from "../../Reuseables/Square.jss";
import {themes} from "../../styles/themes.jss";

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
        theme: theme,
        type: "normal",
        rf: rf,
        fontSize: (screenCase === 'desktop') ? fontSize0095 : getBoardFontSize(),
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            "&:hover": {backgroundColor: themes[theme].sqr_hover},
        },
    });

    if (isSpan) {
        return (
            <div className={classes.span} key={rf}>
                {showSpanText ? (<SpanLabel theme={theme}/>) : null}
            </div>
        );
    }

if (isOffset)
    {
        return (
            <div
                className={classes.offset}
                onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
                key={rf}
            >
                {showOffsetText ? (
                    <OffsetLabel
                        offset={getOffset(rf, pieceLoc)}
                        theme={theme}
                    />) : null}
            </div>
        );
    }

return (
    <div
        className={isLightSqr ? classes.light_normal : classes.dark_normal}
        onClick={() => toggleOffset(rf, getOffset(rf, pieceLoc))}
        key={rf}
    >
        {children}
    </div>
);
}
