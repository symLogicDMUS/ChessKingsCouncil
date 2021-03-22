import React, { useEffect, useReducer } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { divideList } from "./divideList";
import { renderList } from "./renderList";
import { reducer } from "./reducer.red";
import { useStyles } from "./ScrollTable.jss";

/**
 * The style prop must include width and fontSize!
 * @param listItems: a list of strings or components
 * @param title: string or component that renders text
 * @param numRows
 * @param theme
 * @param width
 * @param fontSize
 * @param rootClassProp
 * @param listItemClassProp
 * @param arrowButtonClassProp
 * @param arrowIconClassProp
 * @param textClassProp
 * @param addedClassProp
 * @returns {JSX.Element}
 * @constructor
 */
function ScrollTable({
    listItems,
    title,
    numRows,
    theme,
    width,
    fontSize,
    rootClassProp,
    listItemClassProp,
    arrowButtonClassProp,
    arrowIconClassProp,
    textClassProp,
    addedClassProp,
}) {
    const classes = useStyles({ theme: theme, width: width, fontSize: fontSize });

    const [state, dispatch] = useReducer(reducer, {
        dataLists: divideList(listItems, numRows),
        componentList: renderList(
            divideList(listItems, numRows).inView,
            numRows,
            classes,
            textClassProp,
            listItemClassProp,
        ),
    });

    useEffect(() => {
        dispatch({
            type: "update",
            listItems: listItems,
            numRows: numRows,
            classes: classes,
            textClassProp: textClassProp,
            listItemClassProp: listItemClassProp,
        });
    }, [listItems.length, listItemClassProp, textClassProp, classes, numRows]);

    return (
        <Box
            className={clsx(classes.scroll_table, {
                [rootClassProp]: rootClassProp,
            })}
        >
            {title ? title : null}
            <Button
                onClick={() =>
                    dispatch({
                        type: "scroll-up",
                        numRows: numRows,
                        classes: classes,
                        textClassProp: textClassProp,
                        listItemClassProp: listItemClassProp,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassProp]: arrowButtonClassProp,
                })}
                fullWidth={true}
                disableElevation={true}
                variant="outlined"
            >
                <ArrowDropUpIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowIconClassProp]: arrowIconClassProp,
                    })}
                />
            </Button>
            {state.componentList}
            <Button
                onClick={() =>
                    dispatch({
                        type: "scroll-down",
                        numRows: numRows,
                        classes: classes,
                        textClassProp: textClassProp,
                        listItemClassProp: listItemClassProp,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassProp]: arrowButtonClassProp,
                })}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
            >
                <ArrowDropDownIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowButtonClassProp]: arrowButtonClassProp,
                    })}
                />
            </Button>
        </Box>
    );
}

export default ScrollTable;
