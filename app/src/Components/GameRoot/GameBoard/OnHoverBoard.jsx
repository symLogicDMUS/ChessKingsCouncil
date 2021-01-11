import React, {useEffect, useReducer} from "react";
import {OnHoverSquare} from "./OnHoverSquare";
import {rankfiles} from "../../helpers/rankfiles";
import {reducer} from "./reducers/OnHoverBoard";
import {useStyles} from "./OnHoverBoard.jss";

export function OnHoverBoard({isDragging, theme}) {
    const classes = useStyles();
    const [squares, dispatch] = useReducer(
        reducer,
        rankfiles.map((rf) => (
            <OnHoverSquare key={rf} isActive={true} theme={theme}/>
        ))
    );
    useEffect(() => {
        if (isDragging) {
            dispatch({type: 'turn-on', theme: theme})
        } else {
            dispatch({type: 'turn-off', theme: theme})
        }
    }, [isDragging])

    return (
        <div className={classes.hover_board}>
            {squares}
        </div>
    );
}
