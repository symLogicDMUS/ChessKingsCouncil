import React from "react";
import {useStyles} from "./ArrowButton.jss"

export function ArrowButton({id, pos, image, isActive, toggleSpan, theme}) {
    const classes = useStyles({pos})
    return (
        <div
            onClick={() => toggleSpan(id)}
            className={isActive ? classes.button_selected : classes.button_normal}
        >
            <img src={`/Images/arrows/range pad arrows/${theme}/${image}`} className={classes.vector}/>
        </div>
    );
}
