import React from "react";
import {v4 as uuidv4} from 'uuid';
import {RangeListItem} from "../RangeListItem";
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
                <RangeListItem
                    key={uuidv4()}
                    theme={theme}
                    rangeText={stepFuncNamesToText[span]}
                    onClick={() => parentDispatch({
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
                    key={uuidv4()}
                    theme={theme}
                    rangeText={offsetToText(offset)}
                    onClick={() => parentDispatch({
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
                    theme={theme}
                    rowStyle={rowStyle()}
                    style={rangeListStyle()}
                    buttonStyle={buttonStyle()}
                    listItems={getOffsetListItems()}
                />
            ) : null}
            {rangeType === "span" ? (
                <ScrollTable
                    numRows={5}
                    theme={theme}
                    rowStyle={rowStyle()}
                    style={rangeListStyle()}
                    buttonStyle={buttonStyle()}
                    listItems={getSpanListItems()}
                />
            ) : null}
        </>
    );
}

