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
 * @param rootClassName
 * @param listItemClassName
 * @param arrowButtonClassName
 * @param arrowIconClassName
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
    rootClassName,
    listItemClassName,
    arrowButtonClassName,
    arrowIconClassName,
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
            listItemClassName,
        ),
    });

    useEffect(() => {
        dispatch({
            type: "update",
            listItems: listItems,
            numRows: numRows,
            classes: classes,
            textClassProp: textClassProp,
            listItemClassProp: listItemClassName,
        });
    }, [listItems.length, listItemClassName, textClassProp, classes, numRows]);

    return (
        <Box
            className={clsx(classes.scroll_table, {
                [rootClassName]: rootClassName,
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
                        listItemClassProp: listItemClassName,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassName]: arrowButtonClassName,
                })}
                fullWidth={true}
                disableElevation={true}
                variant="outlined"
            >
                <ArrowDropUpIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowIconClassName]: arrowIconClassName,
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
                        listItemClassProp: listItemClassName,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassName]: arrowButtonClassName,
                })}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
            >
                <ArrowDropDownIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowButtonClassName]: arrowButtonClassName,
                    })}
                />
            </Button>
        </Box>
    );
}

export default ScrollTable;
