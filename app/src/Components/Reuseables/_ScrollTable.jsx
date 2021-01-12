import React, {useEffect, useReducer} from "react";
import {copy} from "../helpers/copy";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

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

export function ScrollTable({listItems, numRows, theme, style, buttonStyle, subHeader}) {

    const classes = useStyles({theme});

    const [state, dispatch] = useReducer(reducer, divideList(listItems, numRows));

    useEffect(() => {
        dispatch({type: 'update', listItems: listItems, numRows: numRows})
    }, [listItems])

    return (
        <div>
            <Button
                onClick={() => dispatch({type: 'scroll-up', numRows: numRows, listItems: listItems})}
                variant="outlined"
                fullWidth={true}
                className={this.props.classes.arrow_button}
                style={this.props.buttonStyle}
                disableElevation={true}
            >
                <ArrowDropUpIcon/>
            </Button>
            {state.aboveView}
            {state.inView}
            {state.belowView}
            <Button
                onClick={() => dispatch({type: 'scroll-down', numRows: numRows, listItems: listItems})}
                variant="outlined"
                fullWidth={true}
                className={this.props.classes.arrow_button}
                style={this.props.buttonStyle}
                disableElevation={true}
            >
                <ArrowDropUpIcon/>
            </Button>
        </div>
    )
}