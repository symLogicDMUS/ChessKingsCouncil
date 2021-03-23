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
                    numRows={5}
                    theme={theme}
                    listItems={getOffsetListItems()}
                    listItemClassProp={classes.row_style}
                    rootClassProp={classes.range_list_style}
                    addedClassProp={classes.range_list_style}
                    arrowButtonClassProp={classes.button_style}
                >
                </ScrollTable>
            ) : null}
            {rangeType === "span" ? (
                <ScrollTable
                    numRows={5}
                    theme={theme}
                    listItems={getSpanListItems()}
                    listItemClassProp={classes.row_style}
                    rootClassProp={classes.range_list_style}
                    addedClassProp={classes.range_list_style}
                    arrowButtonClassProp={classes.button_style}
                />
            ) : null}
        </>
    );
}

