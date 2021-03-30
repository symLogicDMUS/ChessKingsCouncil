import React, { useEffect, useReducer } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { divideList } from "./divideList";
import { renderList } from "./renderList";
import { reducer } from "./ScrollTable.red";
import { useStyles } from "./ScrollTable.jss";

function ScrollTable({
    listItems,
    title,
    numRows,
    theme,
    rootClassName,
    listItemClassName,
    arrowButtonClassName,
    arrowButtonTopClassName,
    arrowButtonBottomClassName,
    arrowIconClassName,
    arrowIconTopClassName,
    arrowIconBottomClassName,
    textClassName,
    addedClassName,
}) {
    const classes = useStyles({theme: theme});

    const [state, dispatch] = useReducer(reducer, {
        dataLists: divideList(listItems, numRows),
        componentList: renderList(
            divideList(listItems, numRows).inView,
            numRows,
            classes,
            textClassName,
            listItemClassName
        ),
    });

    useEffect(() => {
        dispatch({
            type: "update",
            listItems: listItems,
            numRows: numRows,
            classes: classes,
            textClassName: textClassName,
            listItemClassName: listItemClassName,
        });
    }, [listItems.length, listItemClassName, textClassName, classes, numRows]);

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
                        textClassName: textClassName,
                        listItemClassName: listItemClassName,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassName]: arrowButtonClassName,
                    [arrowButtonTopClassName]: arrowButtonTopClassName,
                })}
                fullWidth={true}
                disableElevation={true}
                variant="outlined"
            >
                <ArrowDropUpIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowIconClassName]: arrowIconClassName,
                        [arrowIconTopClassName]: arrowIconTopClassName,
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
                        textClassName: textClassName,
                        listItemClassName: listItemClassName,
                    })
                }
                className={clsx(classes.arrow_button, {
                    [arrowButtonClassName]: arrowButtonClassName,
                    [arrowButtonBottomClassName]: arrowButtonBottomClassName,
                })}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
            >
                <ArrowDropDownIcon
                    className={clsx(classes.arrow_icon, {
                        [arrowIconClassName]: arrowIconClassName,
                        [arrowIconBottomClassName]: arrowIconBottomClassName,
                    })}
                />
            </Button>
        </Box>
    );
}

export default ScrollTable;
