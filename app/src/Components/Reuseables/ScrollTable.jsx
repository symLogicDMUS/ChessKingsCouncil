import React, {useEffect, useReducer} from "react";
import {copy} from "../helpers/copy";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "./ScrollTable.jss";

function divideList(listItems, numRows) {
    let aboveView = [];
    let inView = [];
    let belowView = [];
    let remaining = 0;
    if (listItems.length > numRows) {
        remaining = listItems.length - numRows;
        let lenTop = Math.floor(remaining / 2);
        for (let i = 0; i < lenTop; i++) {
            aboveView.push(listItems[i]);
        }
        let current = lenTop;
        for (let i = 0; i < numRows; i++) {
            inView.push(listItems[current]);
            current++;
        }
        for (let i = current; i < listItems.length; i++) {
            belowView.push(listItems[i]);
        }
    } else inView = listItems;
    return {aboveView: aboveView, inView: inView, belowView: belowView}
}

function renderList(inView, numRows, classes) {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        if ((i+1) % 2 === 0) {
            rows.push(
                <Box className={classes.list_item_even}>
                    <Typography
                        className={classes.text}
                        noWrap={true}
                    >
                        {inView}
                    </Typography>
                </Box>
            )
        } else {
            rows.push(
                <Box className={classes.list_item_odd}>
                    <Typography
                        className={classes.text}
                        noWrap={true}
                    >
                        {inView}
                    </Typography>
                </Box>
            )
        }
    }
    return rows;
}

export function componentsReducer(state, action) {
    switch (action.type) {
        case "update":
            return renderList(action.inView, action.numRows, action.classes)
        default:
            throw new Error();
    }
}

export function reducer(state, action) {
    let lists, a, b;
    switch (action.type) {
        case "update":
            return divideList(action.listItems, action.numRows);
        case 'scroll-up':
            lists = copy(state)
            //1. remove the last item in view
            a = lists.inView.pop()
            //2. last item in view is first item below view.
            lists.belowView.unshift(a)
            //3. remove the last item above view.
            b = lists.aboveView.pop()
            //4. last item above view now first item in view
            lists.inView.unshift(b)
            //5. this is the new state
            return lists;
        case 'scroll-down':
            lists = copy(state)
            //1. remove the first item in view.
            a = lists.inView.shift()
            //2. first item in view now last item above view
            lists.aboveView.push(a)
            //3. remove the first item below view.
            b = lists.belowView.shift()
            //4. first item below view now the last item in view
            lists.inView.push(b)
            //5. return the new state.
            return lists;
        default:
            throw new Error();
    }
}

function ScrollTable({listItems, numRows, theme, width, style, buttonStyle, subHeader}) {
    const classes = useStyles({theme: theme, width: width, style: style, buttonStyle: buttonStyle});

    const [state, dispatch] = useReducer(reducer, divideList(listItems, numRows));
    const [componentList, componentsDispatch] = useReducer(componentsReducer, renderList(state.inView, numRows, classes))

    useEffect(() => {
        dispatch({type: 'update', listItems: listItems, numRows: numRows})
        componentsDispatch({type: 'update', inView: state.inView, numRows: numRows, classes: classes})
    }, [listItems])

    return (
        <Box className={classes.scroll_table}>
            <Button
                onClick={() => dispatch({type: 'scroll-up', numRows: numRows, listItems: listItems})}
                className={classes.arrow_button}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
                style={buttonStyle}
            >
                <ArrowDropUpIcon/>
            </Button>
            {subHeader && (<Box className={classes.sub_header}>{subHeader}</Box>)}
            {componentList}
            <Button
                onClick={() => dispatch({type: 'scroll-down', numRows: numRows, listItems: listItems})}
                className={classes.arrow_button}
                disableElevation={true}
                fullWidth={true}
                variant="outlined"
                style={buttonStyle}
            >
                <ArrowDropUpIcon/>
            </Button>
        </Box>
    )
}

export default ScrollTable;