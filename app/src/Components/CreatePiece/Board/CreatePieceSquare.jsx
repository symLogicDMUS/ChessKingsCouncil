import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getOffset } from "../../helpers/getOffset";
import { OffsetLabel } from "./RangeLabelComponents/OffsetLabel";
import { SpanLabel } from "./RangeLabelComponents/SpanLabel";
import { themes } from "../../styles/themes.jss";
import {fontSizes} from "./CreatePieceBoard.jss";
import { useStyles } from "../../Reuseables/Square.jss";

export function CreatePieceSquare({
    rf,
    theme,
    pieceLoc,
    toggleOffset,
    screenCase,
    isSpan,
    isOffset,
    isLightSqr,
    children,
}) {
    const classes = useStyles({
        theme: theme,
        type: "normal",
        rf: rf,
        fontSize: fontSizes[screenCase],
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
                <SpanLabel theme={theme} />
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
                <OffsetLabel
                    offset={getOffset(rf, pieceLoc)}
                    theme={theme}
                    key={uuidv4()}
                />
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
