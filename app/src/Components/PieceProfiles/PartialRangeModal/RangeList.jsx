import React from "react";
import {offsetToText} from "../../helpers/offsetToText";
import {ListItem} from "../../Reuseables/ScrollTable/ListItem";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {useStyles} from "./RangeList.jss";

export function RangeList({
    range,
    rangeType,
    parentDispatch,
    theme,
}) {
    const classes = useStyles({theme});

    const getSpanListItems = () => {
        const spanListItems = [];
        for (const span of range) {
            spanListItems.push(
                <ListItem
                    theme={theme}
                    key={stepFuncNamesToText[span]}
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
                    onClick={() => parentDispatch({
                        type: "Offsets",
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
                    numRows={5}
                    theme={theme}
                    listItemClassName={classes.row_style}
                    className={classes.range_list_style}
                    addedClassName={classes.range_list_style}
                    arrowButtonClassName={classes.button_style}
                >
                    {getOffsetListItems()}
                </ScrollTable>
            ) : null}
            {rangeType === "span" ? (
                <ScrollTable
                    numRows={5}
                    theme={theme}
                    listItemClassName={classes.row_style}
                    className={classes.range_list_style}
                    addedClassName={classes.range_list_style}
                    arrowButtonClassName={classes.button_style}
                >
                    {getSpanListItems()}
                </ScrollTable>
            ) : null}
        </>
    );
}

