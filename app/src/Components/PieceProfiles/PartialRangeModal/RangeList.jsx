import React from "react";
import {ListItem} from "../../Reuseables/ScrollTable/ListItem";
import {offsetToText} from "../../helpers/offsetToText";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {buttonStyle, rangeListStyle, rowStyle} from "./RangeList.jss";

export function RangeList({
    range,
    rangeType,
    parentDispatch,
    theme,
}) {
    const getSpanListItems = () => {
        const spanListItems = [];
        for (const span of range) {
            spanListItems.push(
                <ListItem
                    theme={theme}
                    key={stepFuncNamesToText[span]}
                    // text={stepFuncNamesToText[span]}
                    onClick={() => parentDispatch({
                        type: "span",
                        span: span,
                    })}
                >
                    {stepFuncNamesToText[span]}
                </ListItem>
            );
        }
        return spanListItems;
    };

    const getOffsetListItems = () => {
        const offsetListItems = [];
        for (const offset of range) {
            offsetListItems.push(
                <ListItem
                    theme={theme}
                    key={offsetToText(offset)}
                    // text={offsetToText(offset)}
                    onClick={() => parentDispatch({
                        type: "offset",
                        offset: offset,
                    })}
                >
                    {offsetToText(offset)}
                </ListItem>
            );
        }
        return offsetListItems;
    };

    return (
        <>
            {rangeType === "offset" ? (
                <ScrollTable
                    listItems={getOffsetListItems()}
                    numRows={5}
                    theme={theme}
                    rowStyle={rowStyle()}
                    style={rangeListStyle()}
                    buttonStyle={buttonStyle()}
                >
                </ScrollTable>
            ) : null}
            {rangeType === "span" ? (
                <ScrollTable
                    listItems={getSpanListItems()}
                    numRows={5}
                    theme={theme}
                    rowStyle={rowStyle()}
                    style={rangeListStyle()}
                    buttonStyle={buttonStyle()}
                />
            ) : null}
        </>
    );
}

