import React from "react";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import { fontSize0040 } from "../../styles/fontSizes.jss";
import { heights } from "../PieceProfiles.jss";
import { RangeListItem } from "../RangeListItem";
import { stepFuncNamesToText } from "../../helpers/spanToText";
import { offsetToText } from "../../helpers/offsetToText";

export function RangeList({
    range,
    rangeType,
    parentDispatch,
    screenCase,
    theme,
}) {
    const getSpanListItems = () => {
        const spanListItems = [];
        for (const span of range) {
            spanListItems.push(
                <RangeListItem
                    theme={theme}
                    rangeText={stepFuncNamesToText[span]}
                    onClick={parentDispatch({
                        type: "span",
                        span: span,
                    })}
                />
            );
        }
        return spanListItems;
    };

    const getOffsetListItems = () => {
        const offsetListItems = [];
        for (const offset of range) {
            offsetListItems.push(
                <RangeListItem
                    theme={theme}
                    rangeText={offsetToText(offset)}
                    onClick={parentDispatch({
                        type: "offset",
                        offset: offset,
                    })}
                />
            );
        }
        return offsetListItems;
    };

    return (
        <>
            {rangeType === "offset" ? (
                <ScrollTable
                    numRows={5}
                    listItems={getOffsetListItems()}
                    theme={theme}
                    style={{
                        width: "8em",
                        height: heights[screenCase],
                        fontSize: fontSize0040,
                    }}
                    buttonStyle={{ borderRadius: 0 }}
                    rowStyle={{ cursor: "pointer" }}
                />
            ) : null}
            {rangeType === "span" ? (
                <ScrollTable
                    numRows={5}
                    listItems={getSpanListItems()}
                    theme={theme}
                    style={{
                        width: "8em",
                        height: heights[screenCase],
                        fontSize: fontSize0040,
                    }}
                    buttonStyle={{ borderRadius: 0 }}
                    rowStyle={{ cursor: "pointer" }}
                />
            ) : null}
        </>
    );
}
