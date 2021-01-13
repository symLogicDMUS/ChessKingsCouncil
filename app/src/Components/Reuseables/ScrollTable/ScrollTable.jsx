import React, {useEffect, useReducer} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {divideList} from "./divideList";
import {renderList} from "./renderList";
import {reducer} from "./reducer.red";
import {useStyles} from "./ScrollTable.jss";

function ScrollTable({listItems, title, numRows, theme, width, style, buttonStyle}) {
    const classes = useStyles({theme: theme, width: width, style: style, buttonStyle: buttonStyle});

    const [state, dispatch] = useReducer(reducer, {
        dataLists: divideList(listItems, numRows),
        componentList: renderList(divideList(listItems, numRows).inView, numRows, classes)
    });

    useEffect(() => {
        dispatch({type: 'update', listItems: listItems, numRows: numRows, classes: classes})
    }, [listItems])

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
                <ArrowDropUpIcon/>
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
                <ArrowDropDownIcon/>
            </Button>
        </Box>
    )
}

export default ScrollTable;