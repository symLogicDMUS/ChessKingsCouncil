import React, {useEffect, useReducer} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {divideList} from "./divideList";
import {renderList} from "./renderList";
import {reducer} from "./reducer.red";
import {useStyles} from "./ScrollTable.jss";

/**
 * The style prop must include width and fontSize!
 * @param listItems
 * @param title
 * @param numRows
 * @param theme
 * @param style
 * @param buttonStyle
 * @param addedStyle
 * @returns {JSX.Element}
 * @constructor
 */
function ScrollTable({listItems, title, numRows, theme, style, buttonStyle, addedStyle}) {
    const classes = useStyles({theme: theme, style: style, addedStyle: addedStyle, numRows: numRows});

    const [state, dispatch] = useReducer(reducer, {
        dataLists: divideList(listItems, numRows),
        componentList: renderList(divideList(listItems, numRows).inView, numRows, classes)
    });

    useEffect(() => {
        dispatch({type: 'update', listItems: listItems, numRows: numRows, classes: classes})
    }, [listItems.length])

    return (
        <Box className={classes.scroll_table}>
            {title ? (title) : null}
            <Button
                onClick={() => dispatch({type: 'scroll-up', numRows: numRows, classes: classes})}
                className={classes.arrow_button}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
                style={buttonStyle}
            >
                <ArrowDropUpIcon className={classes.arrow_icon}  />
            </Button>
            {state.componentList}
            <Button
                onClick={() => dispatch({type: 'scroll-down', numRows: numRows, classes: classes})}
                className={classes.arrow_button}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
                style={buttonStyle}
            >
                <ArrowDropDownIcon className={classes.arrow_icon}/>
            </Button>
        </Box>
    )
}

export default ScrollTable;